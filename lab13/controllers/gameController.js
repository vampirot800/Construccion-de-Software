// gameController.js

exports.getIndex = (req, res, next) => {
    const games = [
        { title: "Minecraft" },
        { title: "Doom" },
        { title: "Halo" }
    ]; // Ejemplo de juegos
    res.render('index', {
        pageTitle: 'Home',
        games: games // Pasar los juegos a la vista
    });
};
