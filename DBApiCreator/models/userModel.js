const db = require('../config/db');

const User = {
    setDb: (mockDb) => {
        this.db = mockDb;
    },
    getAll: (callback) => {
        this.db.query('SELECT * FROM users', callback);
    },
    getById: (id, callback) => {
        this.db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },
    create: (user, callback) => {
        this.db.query('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email], callback);
    },
    update: (id, user, callback) => {
        this.db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, id], callback);
    },
    delete: (id, callback) => {
        this.db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
};

// Por padrão, use o banco de dados real
User.setDb(db);

module.exports = User;
