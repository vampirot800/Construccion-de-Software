// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = (req, res) => {
    console.log('Register endpoint hit');  // Debugging statement
    const { username, password } = req.body;

    User.findOne({ username: username })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: "El usuario ya existe" });
            }

            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const newUser = new User({
                        username: username,
                        password: hashedPassword
                    });
                    return newUser.save();
                })
                .then(result => {
                    res.status(201).json({ message: "Usuario registrado exitosamente" });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ message: "Error interno del servidor" });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error interno del servidor" });
        });
};

exports.authenticateUser = (req, res) => {
    console.log('Login endpoint hit');  // Debugging statement
    const { username, password } = req.body;

    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }

            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            res.status(200).json({ message: "Autenticación exitosa" });
                        });
                    }
                    res.status(401).json({ message: "Credenciales inválidas" });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ message: "Error interno del servidor" });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error interno del servidor" });
        });
};
