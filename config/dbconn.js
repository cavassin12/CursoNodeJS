var mysql = require('mysql');

var connmysql = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clifor'
    });
}

module.exports = function(){
    return connmysql;
}