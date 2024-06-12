const express = require('express');
const router = express.Router();

router.get('/ruta3', (request, response) => {
    response.send('Respuesta de la ruta "/rutasm2/ruta3"');
});

router.post('/ruta4', (request, response) => {
    const datos = request.body;
    const fs = require('fs');
    fs.appendFile('datos.txt', JSON.stringify(datos) + '\n', (err) => {
        if (err) {
            return response.status(500).send('Error al guardar los datos');
        }
        response.send('Datos guardados correctamente');
    });
});

module.exports = router;
