const db = require('../config/db');

const Name = {
    getAllNames: (callback) => {
        db.query('SELECT name FROM plants', callback);
    },
    updateName: (id, name, callback) => {
        db.query('UPDATE plants SET name = ? WHERE id = ?', [name, id], callback);
    }
};

module.exports = Name;