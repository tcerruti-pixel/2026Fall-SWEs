const db = require("../3_config/db.js");

const findById = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            "SELECT * FROM orders WHERE id = ?",
            [id],
            (err, row) => {
                if (err) return reject(err);
                resolve(row);
            }
        );
    });
};

const findAll = () => {
    return new Promise((resolve, reject) => {
        db.all(
            "SELECT * FROM orders ORDER BY id",
            [],
            (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            }
        );
    });
};

module.exports = { findById, findAll };
