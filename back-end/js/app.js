"use strict";
/*
 * Todos las transacciones de datos se hacen a traves de los servicios.
 *
*/
const express = require('express');
const app = express();
const cors = require('cors');
// middleware
app.use(cors());
//convertir lo recibido en json
//app.use(express.urlencoded({extended: false}));
//puerto en donde se abrirá el servidor
app.listen(4000);
console.log('Servidor en el puerto 4000');
