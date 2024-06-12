// routes/videojuegoRoutes.js
const express = require('express');
const router = express.Router();

const videojuegoController = require('../controllers/videojuegoController');

router.get('/videojuegos', videojuegoController.getVideojuegos);
router.get('/videojuegos/:videojuego_id', videojuegoController.getVideojuego);
router.post('/videojuegos', videojuegoController.postVideojuego);
router.post('/videojuegos/update', videojuegoController.updateVideojuego);
router.post('/videojuegos/delete', videojuegoController.deleteVideojuego);

module.exports = router;
