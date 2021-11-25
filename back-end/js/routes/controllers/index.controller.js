"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editVideo = exports.deleteVideo = exports.createVideo = exports.getVideoCursoById = exports.getVideos = void 0;
const database_1 = require("../../database");
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM videos_cursos');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getVideos = getVideos;
const getVideoCursoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    //console.log(req.params);
    const response = yield database_1.pool.query('SELECT * FROM videos WHERE id_curso = $1 AND id_video_curso = $2 ORDER BY id_curso, modulo, id_video_curso', [id_curso, id_video_curso]);
    return res.json(response.rows);
});
exports.getVideoCursoById = getVideoCursoById;
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_curso, id_video_curso, modulo, titulo, link } = req.body;
        //console.log(id_curso, id_video_curso, modulo, titulo, link);
        const response = yield database_1.pool.query('INSERT INTO videos(id_curso, id_video_curso, modulo, titulo, link) VALUES ($1,$2,$3,$4,$5)', [id_curso, id_video_curso, modulo, titulo, link]);
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
    }
    catch (e) {
        console.log('Error: ' + e);
    }
});
exports.createVideo = createVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    const response = yield database_1.pool.query('DELETE FROM videos WHERE id_curso = $1 AND id_video_curso = $2', [id_curso, id_video_curso]);
    res.json(`Video curso: ${id_curso}, id: ${id_video_curso} eliminado`);
});
exports.deleteVideo = deleteVideo;
const editVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_curso = parseInt(req.params.id_curso);
    const id_video_curso = parseInt(req.params.id_video_curso);
    const { modulo, titulo, link } = req.body;
    const response = yield database_1.pool.query('UPDATE videos SET id_curso = $1, id_video_curso = $2, modulo = $3, titulo = $4, link = $5 WHERE id_curso = $1 AND id_video_curso = $2', [id_curso, id_video_curso, modulo, titulo, link]);
    res.json(`Video curso: ${id_curso}, id: ${id_video_curso} editado`);
});
exports.editVideo = editVideo;
