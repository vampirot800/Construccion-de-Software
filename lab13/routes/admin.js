const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/admin', (req, res, next) => {
  res.render('admin', { pageTitle: 'Admin' });
});

router.post('/admin', (req, res, next) => {
  const data = req.body.data;
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'data.txt'), data);
  res.redirect('/');
});

module.exports = router;
