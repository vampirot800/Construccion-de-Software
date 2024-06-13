// middleware/authMiddleware.js
exports.protectRoute = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.status(401).json({ message: "Acceso no autorizado" });
    }
    next();
};
