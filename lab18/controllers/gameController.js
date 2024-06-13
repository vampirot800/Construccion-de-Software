// controllers/gameController.js
exports.getIndex = (req, res, next) => {
    const games = [
        { title: "Minecraft" },
        { title: "Doom" },
        { title: "Halo" }
    ];
    res.render('index', {
        pageTitle: 'Home',
        games: games
    });
};
