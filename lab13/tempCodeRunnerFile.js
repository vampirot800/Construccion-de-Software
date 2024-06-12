const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');

// Usar las rutas
app.use(homeRoutes);
app.use(adminRoutes);

// Manejar error 404 en el controlador correspondiente
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
