var app = require('express')();
var consign = require('consign');
var body = require('body-parser');
//var ExpressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views/');

app.use(body.urlencoded({extended:true}));
//app.use(ExpressValidator());

consign()
    .include('app/rotas')
    .then('config/dbconn.js')
    .then('app/models')
    .into(app);


    module.exports = app;


