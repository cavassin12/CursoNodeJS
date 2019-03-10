module.exports = function(app){
    app.get('/Clifor/Geral', function(req, res){
        res.render('clifor/Geral');
    });
    app.get('/clifor/Nova', function(req, res){
        res.render('clifor/Nova');
    })
}