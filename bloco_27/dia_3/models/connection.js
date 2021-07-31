const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'kevin',
    password: '7763',
    database: 'rest_exercicios' });

module.exports = connection;
