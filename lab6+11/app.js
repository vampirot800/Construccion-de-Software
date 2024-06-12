const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Importar rutas
const modulo1Rutas = require('./rutasm1');
const modulo2Rutas = require('./rutasm2');

// Usar rutas
app.use('/rutasm1', modulo1Rutas);
app.use('/rutasm2', modulo2Rutas);

// Ruta 5: Ruta adicional en el archivo principal
app.get('/ruta5', (request, response) => {
    response.send('Respuesta de la ruta "/ruta5"');
});

// Manejo de rutas no existentes
app.use((request, response) => {
    response.status(404).send('Página no encontrada');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
