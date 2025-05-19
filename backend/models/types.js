const db = require('../config/db');

const Type = {
    getAllTypes: (callback) => {
        db.query('SELECT DISTINCT type FROM plants', callback);
    },
    updateType: (id, type, callback) => {
        db.query('UPDATE plants SET type = ? WHERE id = ?', [type, id], callback);
    }
};

module.exports = Type;