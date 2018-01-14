var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

require('dotenv').config({path: './config.env'});

var index = require('./routes/index');
var users = require('./routes/users');
var recipients = require('./routes/recipients');
var fires = require('./routes/fires');
var twitter = require('./routes/twitter');
var authRoute = require('./routes/auth.js');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());

app.use('/', authRoute);
app.use('/users', users);
app.use('/recipients', recipients);
app.use('/fires', fires);
app.use('/twitter', twitter);


//Models
var models = require("./models");

//load passport strategies
require('./config/passport.js')(passport, models.User);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
