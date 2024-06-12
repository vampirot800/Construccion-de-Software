// controllers/videojuegoController.js
const Videojuego = require('../models/videojuego');

exports.getVideojuegos = (req, res, next) => {
    Videojuego.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('vista', {
                videojuegos: rows
            });
        })
        .catch(err => console.log(err));
};

exports.getVideojuego = (req, res, next) => {
    const id = req.params.videojuego_id;
    Videojuego.findById(id)
        .then(([videojuego]) => {
            res.render('detalle', {
                videojuego: videojuego[0]
            });
        })
        .catch(err => console.log(err));
};

exports.postVideojuego = (req, res, next) => {
    const nombre = req.body.nombre;
    const plataforma = req.body.plataforma;
    
    const videojuego = new Videojuego(nombre, plataforma);
    videojuego.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.updateVideojuego = (req, res, next) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const plataforma = req.body.plataforma;
    
    const videojuego = new Videojuego(nombre, plataforma);
    videojuego.id = id;
    videojuego.update()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.deleteVideojuego = (req, res, next) => {
    const id = req.body.id;
    Videojuego.deleteById(id)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};
