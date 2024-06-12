// routes/index.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getIndex);
router.post('/add-game', gameController.postGame);

module.exports = router;
