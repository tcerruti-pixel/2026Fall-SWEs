const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../4_database/shop.db");
const schemaPath = path.join(__dirname, "../4_database/schema.sql");

const db = new sqlite3.Database(dbPath);

db.initialize = () => {
    return new Promise((resolve, reject) => {
        const schema = fs.readFileSync(schemaPath, "utf8");

        db.exec(schema, (err) => {
            if (err) return reject(err);

            console.log("Database initialized successfully!");
            resolve();
        });
    });
};

module.exports = db;
