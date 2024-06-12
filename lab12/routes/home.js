const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { pageTitle: 'About' });
});
// Assuming you are rendering this template in your route handler
router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'LAB 12' });
});
module.exports = router;
