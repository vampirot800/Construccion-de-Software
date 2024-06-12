const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'BaseDeDatosLab17',
    password: '23102002'
});

module.exports = pool.promise();
