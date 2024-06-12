// models/videojuego.js
const db = require('../util/database');

class Videojuego {
    constructor(nombre, plataforma) {
        this.nombre = nombre;
        this.plataforma = plataforma;
    }

    save() {
        return db.execute(
            'INSERT INTO videojuegos (nombre, plataforma) VALUES (?, ?)',
            [this.nombre, this.plataforma]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM videojuegos');
    }

    static findById(id) {
        return db.execute('SELECT * FROM videojuegos WHERE id = ?', [id]);
    }

    update() {
        return db.execute(
            'UPDATE videojuegos SET nombre = ?, plataforma = ? WHERE id = ?',
            [this.nombre, this.plataforma, this.id]
        );
    }

    static deleteById(id) {
        return db.execute('DELETE FROM videojuegos WHERE id = ?', [id]);
    }
}

module.exports = Videojuego;
