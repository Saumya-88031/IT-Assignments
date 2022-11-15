const mysql = require('mysql2');

const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'userdatabase',
        password: 'root'
})

module.exports = pool.promise();