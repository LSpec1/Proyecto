import { request, Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../../database'

export const getVideos = async (req: Request, res: Response): Promise<Response>=> {
    try {
        const response = await pool.query('SELECT * FROM videos ORDER BY id_curso');
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

export const getVideoById = async (req: Request, res: Response): Promise<Response>=> {
    const id = parseInt(req.params.id)
    const response = await pool.query('SELECT * FROM videos WHERE id = $1', [id]);
    return res.json(response.rows)
}

export const createVideo = async (req: Request, res: Response) => {
    try {
        const { id_curso, id_video_curso, modulo, titulo, link } = req.body;
        //console.log(id_curso, id_video_curso, modulo, titulo, link);
        const response = await pool.query('INSERT INTO videos(id_curso, id_video_curso, modulo, titulo, link) VALUES ($1,$2,$3,$4,$5)', [id_curso, id_video_curso, modulo, titulo, link]);
        res.json({
            message: 'Video guardado',
            body: {
                video: {
                    id_curso,
                    id_video_curso,
                    modulo,
                    titulo,
                    link
                }
            }
        });
    } catch (e) {
        console.log('Error: '+e);
        
    }
}