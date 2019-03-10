var mysql = require('mysql');

var connmysql = function(){
    return connection = mysql.createConnection({
        host: '127.0.0.01',
        user: 'root',
        password: '',
        database: 'clifor'
    });
}

module.exports = function(){
    return connmysql;
}