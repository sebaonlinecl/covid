'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();
var home = require('./routes/home');
var users = require('./routes/users');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphb = require('express-handlebars');
var stylus = require('stylus');
var nib = require('nib');

app.use(logger('dev'));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exphb({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.use(favicon(__dirname +  '/public/favicon.ico'));

app.use('/', home);
app.use('/users', users);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status=404;
    next(err);
});

if(app.get('env')=='development'){
    app.use(function(err, req, res, next){
       res.status(err.status || 500); 
       res.render('error', {
           message: err.message,
           error: err
       });
    });
}
app.use(function(err, req, res, next){
    res.status(err.status || 500); 
    res.render('error', {
        message: err.message,
        error: {}
    });
});


if(!!module.parent){
    module.exports = app;
}else{
    app.listen(3000);
};


