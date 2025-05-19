const db = require('../config/db');

exports.getAllPrices = (req, res) => {
    db.query('SELECT id, name, price FROM plants', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.updatePrice = (req, res) => {
    const { id, price } = req.body;
    db.query('UPDATE plants SET price = ? WHERE id = ?', [price, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Prix mis à jour ' });
    });
};