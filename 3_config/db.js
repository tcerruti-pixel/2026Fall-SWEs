const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./4_databse/shop.db");


// read schema
const fs = require("fs");
const path = require("path");
path.join(__dirname, "../4_database/schema.sql");

const schema = fs.readFileSync(schemaPath, "utf-8");

//excute the schema
db.exec(schema, (err)=> {
    if(err) {console.error("Error initializing database", err.message);}
    else {console.log("Congratulations! DB initialized with schema.sql!");}
});

//Exports the db.js so the upper level can use it
module.exports = db;