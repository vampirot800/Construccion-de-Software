const express = require('express');
const session = require('express-session');
const app = express();

// Configuración de sesiones
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false,
    saveUninitialized: false,
}));

// Middleware para el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Nombre de usuario" required>
            <input type="password" name="password" placeholder="Contraseña" required>
            <button type="submit">Iniciar sesión</button>
        </form>
    `);
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === 'contraseña') {
        req.session.user = username; 
        res.send('¡Inicio de sesión exitoso!');
    } else {
        res.send('Nombre de usuario o contraseña incorrectos');
    }
});

// Ruta protegida que requiere inicio de sesión
app.get('/perfil', (req, res) => {
    if (req.session.user) {
        res.send(`Bienvenido, ${req.session.user}! <a href="/logout">Cerrar sesión</a>`);
    } else {
        res.send('Debes iniciar sesión para ver esta página. <a href="/">Iniciar sesión</a>');
    }
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(3006, () => {
    console.log('Servidor iniciado en http://localhost:3006');
});
