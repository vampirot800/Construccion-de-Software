// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', gameController.getIndex);
router.get('/protectedRoute', authMiddleware.protectRoute, (req, res) => {
    res.send('Esta ruta está protegida');
});

module.exports = router;
