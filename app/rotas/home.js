module.exports = function(appl){

    var md5 = require('md5');

    appl.get('/', function(req, res){
        res.render('home/index');
    });
    appl.get('/Login', function(req, res){
        res.render('home/login');
    });
    appl.all('/Logar', function(req, res){
        var dados = req.body;
        var v_login = dados.login;
        var v_senha = dados.senha;

        if(v_login.length == 0){
            res.redirect('/Login?error=user');
        }
        if(v_senha.length == 0){
            res.redirect('/Login?error=senha');
        }else{
            v_senha = md5(dados.senha);
        }
        
        let conna = appl.config.dbconn();
        var logi = new appl.app.models.DaoLogin(conna);

        logi.getLogar(v_login, v_senha, function(error, resulta){
            if(error){
                console.log("Erro: " + {error})
            }else{
                if(resulta.length > 0){

                }else{
                    console.log("nao a registros");
                }

            }
        });

    });
    
}