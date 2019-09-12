var express = require('express');
var fs = require('fs');
const hbs = require('hbs');

var app = express();
var bodyParser = require('body-parser');
const leagues = require('./routes/leagues');


var port = 3000

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//middleware 
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index.hbs', { pageTitle: 'Hello World!!' });
});

app.get('/index', (request, response) => {
    response.render('index.hbs', { pageTitle: 'Hello World!!' });
});

app.use('/leagues', leagues);

app.use(function(req, res) {
    res.statusCode = 404;
    res.redirect('/404.html');
});

app.listen(port, function(req, res) {
    console.log('listening..')
});