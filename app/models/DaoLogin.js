function DaoLogin(conection){
    this._conn = conection;
}

DaoLogin.prototype.getLogar = function(user, senha, callback){
    this._conn.query("select * from tb_usuarios where usuario = '" + user + "' and senha = '" + senha + "'", callback);
}

module.exports = function(){
    return DaoLogin;
}