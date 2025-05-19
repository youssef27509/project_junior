const db = require('../config/db');

exports.getAllTypes = (req, res) => {
    db.query('SELECT DISTINCT type FROM plants', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.updateType = (req, res) => {
    const { id, type } = req.body;
    db.query('UPDATE plants SET type = ? WHERE id = ?', [type, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Type mis à jour ' });
    });
};