function DaoLogin(conection){
    this._conn = conection;
}

DaoLogin.prototype.getLogar = function(user, senha, callback){
    var quer = "select * from tb_usuarios where usuario = '" + user + "' and senha = '" + senha + "'";
    //console.log(quer);
    this._conn.query(quer, callback);
}

module.exports = function(){
    return DaoLogin;
}