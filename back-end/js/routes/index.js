"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//router.get('/test', (req, res) => res.send('hello world'))
const index_controller_1 = require("./controllers/index.controller");
router.get('/videos', index_controller_1.getVideos);
router.get('/videos/:id_curso/:id_video_curso', index_controller_1.getVideoCursoById);
//Empleos
router.get('/empleo', index_controller_1.getEmpleos);
router.get('/empleo/:id', index_controller_1.getEmpleosById);
router.get('/empleo/sugeridos', index_controller_1.getEmpleosSugeridos);
router.post('/crearVideo', index_controller_1.createVideo);
router.delete('/eliminarVideo/:id_curso/:id_video_curso', index_controller_1.deleteVideo);
router.put('/editarVideo/:id_curso/:id_video_curso', index_controller_1.editVideo);
exports.default = router;
