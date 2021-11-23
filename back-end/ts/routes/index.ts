import { Router } from 'express';
const router = Router();

//router.get('/test', (req, res) => res.send('hello world'))

import { createVideo, getVideoById, getVideos } from './controllers/index.controller'
router.get('/videos', getVideos);
router.get('/videos/:id', getVideoById);
router.post('/crearVideo', createVideo);
//router.put('/user:id', getUser);
//router.delete('/user:id', getUser);

export default router;