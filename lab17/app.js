// app.js (o index.js)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/videojuegoRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3007, () => {
    console.log('Servidor corriendo en el puerto 3007');
});
