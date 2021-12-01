import { Router } from 'express';
const bodyParser = require('body-parser');
const router = Router();

//router.get('/test', (req, res) => res.send('hello world'))


import { createVideo, deleteVideo, getVideoCursoById, getVideos, editVideo, getEmpleos, getEmpleosById, getEmpleosSugeridos, deleteEmpleo, insertarEmpleo } from './controllers/index.controller'



router.get('/videos', getVideos);
router.get('/videos/:id_curso/:id_video_curso', getVideoCursoById);


//Empleos
router.get('/empleo',getEmpleos);
router.get('/empleo/:id',getEmpleosById);
router.get('/empleo/sugeridos/:id',getEmpleosSugeridos);
router.delete('/eliminarEmpleo/:id_empleo', deleteEmpleo);
router.post('/crearEmpleo',insertarEmpleo);

router.post('/crearVideo', createVideo);
router.delete('/eliminarVideo/:id_curso/:id_video_curso', deleteVideo);
router.put('/editarVideo/:id_curso/:id_video_curso', editVideo);

export default router;