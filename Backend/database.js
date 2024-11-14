require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.localhost,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.ticketing_system
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
