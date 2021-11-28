import { request, Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../../database'

export const getVideos = async (req: Request, res: Response): Promise<Response>=> {
    try {
        const response = await pool.query('SELECT * FROM videos_cursos');
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

export const getVideoCursoById = async (req: Request, res: Response): Promise<Response>=> {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    //console.log(req.params);
    const response = await pool.query('SELECT * FROM videos WHERE id_curso = $1 AND id_video_curso = $2 ORDER BY id_curso, modulo, id_video_curso', [id_curso, id_video_curso]);
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

export const deleteVideo = async (req: Request, res: Response) => {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    const response = await pool.query('DELETE FROM videos WHERE id_curso = $1 AND id_video_curso = $2', [id_curso, id_video_curso]);
    res.json(`Video curso: ${id_curso}, id: ${id_video_curso} eliminado`)
}

export const editVideo = async (req: Request, res: Response) => {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    const { modulo, titulo, link } = req.body;
    const response = await pool.query('UPDATE videos SET id_curso = $1, id_video_curso = $2, modulo = $3, titulo = $4, link = $5 WHERE id_curso = $1 AND id_video_curso = $2', [id_curso, id_video_curso, modulo, titulo, link]);
    res.json(`Video curso: ${id_curso}, id: ${id_video_curso} editado`)
}



export const getEmpleos = async (req: Request, res: Response):Promise <Response> => {
    try {
        const response = await pool.query('SELECT * FROM empleos');
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

export const getEmpleosById = async (req: Request, res: Response):Promise <Response> => {
    try {
        const id_empleo = parseInt(req.params.id)
        const response = await pool.query ('SELECT * FROM empleos WHERE _idNoticia = $1', [id_empleo])
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

export const getEmpleosSugeridos = async (req: Request, res: Response):Promise <Response> => {
    try {
        const id_empleo = parseInt(req.params.id)
        const response = await pool.query ('SELECT * FROM empleos WHERE _idNoticia <> $1 order by fecha asc limit 2', [id_empleo])
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

