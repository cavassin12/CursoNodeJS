module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    });
    app.get('/Login', function(req, res){
        res.render('home/login');
    });
    app.get('/Logar', function(req, res){

    });
    
}