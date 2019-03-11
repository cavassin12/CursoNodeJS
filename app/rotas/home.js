module.exports = function (appl) {

    var md5 = require('md5');

    appl.get('/', function (req, res) {
       /* if(req.session.logado == true){
            console.log('não logado');
        }*/
        res.render('home/index');
    });
    appl.get('/Login', function (req, res) {
        res.render('home/login');
    });
    appl.all('/Logar', function (req, res) {
        var dados = req.body;
        var v_login = dados.login;
        var v_senha = dados.senha;

        if (v_login.length == 0) {
            res.redirect('/Login?error=user');
        }
        if (v_senha.length == 0) {
            res.redirect('/Login?error=senha');
        } else {
            v_senha = md5(dados.senha);
            //console.log(v_senha);
        }

        let conna = appl.config.dbconn();
        var logi = new appl.app.models.DaoLogin(conna);

        logi.getLogar(v_login, v_senha, function (error, resulta) {
            if (error) {
                console.log("Erro: " + error.message)
            } else {
                if (resulta.length > 0) {
                  //  req.session.logado = true;
                    res.redirect('/');
                } else {
                    console.log("nao a registros");
                    res.redirect('/Login?error=ine');
                }

            }
        });

    });

}