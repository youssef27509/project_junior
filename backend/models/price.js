const db = require('../config/db');

const Price = {
    getAllPrices: (callback) => {
        db.query('SELECT id, name, price FROM plants', callback);
    },
    updatePrice: (id, price, callback) => {
        db.query('UPDATE plants SET price = ? WHERE id = ?', [price, id], callback);
    }
};

module.exports = Price;