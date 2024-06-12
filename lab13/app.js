// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const gameRoutes = require('./routes/gameRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(gameRoutes);

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});
