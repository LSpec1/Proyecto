import { Router } from 'express';
const router = Router();

//router.get('/test', (req, res) => res.send('hello world'))

import { createVideo, deleteVideo, getVideoCursoById, getVideos, editVideo } from './controllers/index.controller'
router.get('/videos', getVideos);
router.get('/videos/:id_curso/:id_video_curso', getVideoCursoById);
router.post('/crearVideo', createVideo);
router.delete('/eliminarVideo/:id_curso/:id_video_curso', deleteVideo);
router.put('/editarVideo/:id_curso/:id_video_curso', editVideo);

export default router;