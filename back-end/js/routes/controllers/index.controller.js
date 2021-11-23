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
exports.createVideo = exports.getVideoById = exports.getVideos = void 0;
const database_1 = require("../../database");
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM videos ORDER BY id_curso');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getVideos = getVideos;
const getVideoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM videos WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getVideoById = getVideoById;
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
