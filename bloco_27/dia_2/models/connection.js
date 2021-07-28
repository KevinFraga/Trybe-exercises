// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'kevin',
    password: '7763',
    database: 'cep_lookup' });

module.exports = connection;
