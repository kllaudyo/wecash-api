const mysql = require('mysql');

function doConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'wecash_db'
    });
}

module.exports = doConnection;
