const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    showLogin(req, res) {
        res.sendFile('login.html', { root: './public' });
    },

    async login(req, res) {
        const { username, password } = req.body;

        const user = await User.findByUsername(username);
        if (!user) return res.status(401).send("Usuario incorrecto");

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send("Contraseña incorrecta");

        req.session.user = user;
        res.redirect('/pokedex');
    },

    logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
};
