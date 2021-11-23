"use strict";
/*
 * Todos las transacciones de datos se hacen a traves de los servicios.
 *
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//middlewares: convertir lo recibido en json
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const index_1 = __importDefault(require("./routes/index"));
app.use(index_1.default);
//puerto en donde se abrirá el servidor
app.listen(4000);
console.log('Servidor en el puerto 4000');
