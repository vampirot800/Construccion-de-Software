// gameModel.js

const games = []; // Array para almacenar los juegos

module.exports = class Game {
    constructor(title) {
        this.title = title;
    }

    save() {
        games.push(this); // Agregar el juego al array
    }

    static fetchAll() {
        return games; // Devolver todos los juegos
    }
};
