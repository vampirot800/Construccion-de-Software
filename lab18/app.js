// app.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware de análisis del cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de sesión
app.use(session({
    secret: 'ramiro',
    resave: false,
    saveUninitialized: false
}));

// Configuración de protección CSRF
const csrfProtection = csrf();
app.use(csrfProtection);

// Middleware para enviar el token CSRF a todas las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));

// Configuración de las rutas
app.use(authRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
