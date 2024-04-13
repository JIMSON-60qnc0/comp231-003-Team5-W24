// server/config/database.js
const mysql = require('mysql2/promise'); // Using mysql2/promise for easier async/await

const pool = mysql.createPool({
    host: 'localhost',    // Usually 'localhost'
    user: 'root',         // Your MySQL username
    password: '12345',    // Your MySQL password
    database: 'project'   // Name of your database
});

module.exports = pool;
