const db = require('../config/database');
const bcrypt = require('bcrypt');

const User = {
    async create(username, password) {
        const hashed = await bcrypt.hash(password, 10);
        return db.execute(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hashed]
        );
    },

    async findByUsername(username) {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );
        return rows[0];
    }
};

module.exports = User;
