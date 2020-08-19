var express = require('express');
var index = require('./routes/index');
var signup = require('./routes/signup');
var home = require('./routes/home');
var login = require('./routes/login');
var db = require('./database/connection');
var session = require('express-session');
var bodyParser = require('body-parser');
var succ = require('./routes/oauth');
var password_reset = require('./routes/passwordReset');
var logout = require('./routes/logout');
var jlocations = require('./routes/javacriptLocations');

var app = express();

app.set('view engine', 'ejs');

app.use(index);
app.use('/signup', signup);
app.use('/home', home);
app.use('/login', login);
app.use('/succ', succ);
app.use('/password_reset', password_reset);
app.use('/logout', logout);
app.use('/javacript_DOM', jlocations)

var secretString = Math.floor((Math.random() * 10000) + 1);
app.use(session({
    secret: secretString.toString(),
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({
    extended: 'true'
}));

//Database connection.
db.connect((err, succ) => {
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connected to database");
    }
});

app.listen(3002, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Listening on port 3002");
})