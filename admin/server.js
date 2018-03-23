let express = require('express'),
    session = require('express-session'),
    app = express();
//create server
app.listen(1234, () => {
    console.log(`http://localhost:1234`);
});

//=>API处理
/*
* CORS
*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    //,OPTIONS
    /*if(req.method === 'OPTIONS'){
        res.send('current services support cross domain requests!');
    }*/
    next();
});

app.use(session({
    secret: 'zfpx',//=>用来对SESSION-ID相关的COOKIE进行签名
    saveUninitialized: false, //=>是否自动保存未初始化的会话，建议FALSE
    resave: false, //=>是否每次都重新保存会话，建议FALSE
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 //=>有效期，单位是毫秒
    }
}));
/*
* body-parser 把客户端在请求主体中传递的信息进行解析出来，存放到req.body上
*/
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/*
* 客户端基于axios 框架发送Post请求，请求主体中传递内容的格式不是xxx=xxx&xxx=xxx这种格式，它是JSON格式
* 此时我们不能基于URL-ENCODED解析，需要基于JSON解析
* */

app.use(`/course`, require('./route/course'));
app.use(`/profile`, require('./route/profile'));

app.use(function (req, res, next) {
    //404
    res.status(404);
    res.send('not found');
});