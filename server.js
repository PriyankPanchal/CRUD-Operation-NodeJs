/**
 * Created by c100-26 on 18/10/19.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set the views engine to ejs
app.set('views engine', 'ejs');


// var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/registration');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())


/* route to handle login and registration */
app.post('/api/register',registerController.register);
// app.post('/api/authenticate',authenticateController.authenticate);


// use res.render to load up an ejs views file

// index page
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});