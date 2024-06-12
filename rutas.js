const express = require('express');
const router = express.Router();

router.get('/ruta1', (request, response) => {
    response.send('Respuesta de la ruta "/modulo1/ruta1"');
});

router.get('/ruta2', (request, response) => {
    response.send('Respuesta de la ruta "/modulo1/ruta2"');
});

module.exports = router;
