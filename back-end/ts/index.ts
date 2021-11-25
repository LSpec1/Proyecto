/*
 * Todos las transacciones de datos se hacen a traves de los servicios.
 * Por algun motivo si no se incluye cors, aparece un error de conexion
*/

import express from 'express';
const app = express();
const cors = require('cors');

//middlewares: convertir lo recibido en json
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

import indexRoutes from './routes/index'
app.use(indexRoutes);

//puerto en donde se abrirá el servidor
app.listen(4000);
console.log('Servidor en el puerto 4000');