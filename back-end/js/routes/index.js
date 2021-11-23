"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
//router.get('/test', (req, res) => res.send('hello world'))
const index_controller_1 = require("./controllers/index.controller");
router.get('/videos', index_controller_1.getVideos);
router.get('/videos/:id', index_controller_1.getVideoById);
router.post('/crearVideo', index_controller_1.createVideo);
//router.put('/user:id', getUser);
//router.delete('/user:id', getUser);
exports.default = router;
