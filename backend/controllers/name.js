const db = require('../config/db');

exports.getAllNames = (req, res) => {
    db.query('SELECT name FROM plants', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.updateName = (req, res) => {
    const { id, name } = req.body;
    db.query('UPDATE plants SET name = ? WHERE id = ?', [name, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Nom mis à jour ' });
    });
};