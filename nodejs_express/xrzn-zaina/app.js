var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');
var hbs = require('hbs');
Date.prototype.toJSON = function () {return this.getTime()};
var app = express();
app.set("view engine", "html");
//app.engine("html", consolidate.handlebars);
app.engine('html', require('hbs').__express);
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + '/views/partials');
//设置系统变量
app.locals.g_app = "在哪儿"
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'hello world!'
}));

/**
 * 过滤器
 */
/*
app.use(function(req, res, next) {
    var url = req.originalUrl;
    if(req.session.user){
        return res.redirect("/gps/work.html");
    }
    next();
});
*/
app.use(function(req, res, next) {
    if(!req.session.user){
        req.session.user={
            userId:10,
            orgId:4,
            userCode:'syzn7'
        };
    }
    next();
});
app.use('/',  require('./routes/index'));
app.use('/gps', require('./routes/gps'));
app.use('/area', require('./routes/area'));
app.use('/rpt', require('./routes/rpt'));
app.use('/tm', require('./routes/tm'));
app.use('/his', require('./routes/his'));
module.exports = app;