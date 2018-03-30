var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongooseConfig = require('./database/config')
var news = require('./routes/news')
var qiniu = require('./routes/qiniu')
var register = require('./routes/register')
var login = require('./routes/login')
var logout = require('./routes/logout')
var changePwd = require('./routes/changePwd')
var projects = require('./routes/projects')
var userlist = require('./routes/userlist')
var client = require('./routes/client')
var server = require('./routes/server')
var isLogin = require('./routes/isLogin')

var session = require('express-session')
// var proxy = require('http-proxy-middleware');
var cors = require('cors')

var app = express();
app.use(session({
    secret: 'sun',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

// app.use(cors({
//     origin: 'http://localhost:8080',
//     credentials : true,
// }))

// app.use('/api', proxy({
//     target: 'http://localhost:3000',
//     changeOrigin: true,
//     pathRewrite:{
//         "api":"/"
//     }
// }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', qiniu);
app.use('/client', client);
app.use('/server', server);
app.use('/api/user', register);
app.use('/api/user', login);
app.use('/api/news',news)
app.use('/api/projects',projects)
app.use((req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.json({
            data:'用户未登录111',
            code:400,
            msg:'用户未登录',
            ret:false
        })
        return
    }
})
app.use('/api/user',changePwd)
app.use('/api/user',isLogin)
app.use('/api/user',logout)
app.use('/api/userlist',userlist)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
