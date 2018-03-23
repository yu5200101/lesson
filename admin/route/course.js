let express = require('express'),
    route = express.Router();
let utils = require('./utils');

route.get('/banner', async function (req, res) {
    /*utils.readFile('bannerData.json').then(result=>{
        res.send(result);
    });*/

    let result = await utils.readFile('bannerData.json');
    res.send(result);
});

route.use(async function (req, res, next) {
    req.result = await utils.readFile('courseData.json');
    next();
});
route.get('/list', function (req, res) {
    // req.query =>{'type':'vue'}
    let {type = 'all'} = req.query,
        result = req.result;
    if (type !== 'all') {
        //->按照类别进行筛选
        result = result.filter(item => item.type === type);
    }
    res.send(result);
});
route.get('/info', function (req, res) {
    let {id} = req.query,
        result = req.result;
    result = result.find(item => item.id === parseInt(id)) || {};
    res.send(result);
});
route.post('/collect', function (req, res) {
    //=>req.body
    req.session.collect = req.session.collect || [];
    req.body = req.body.item;
    let ary = req.session.collect,
        isExit = ary.find(item => item.id === parseInt(req.body.id));
    !isExit ? ary.push(req.body) : null;
    res.send('success');
});
route.get('/collect', function (req, res) {
    res.send(req.session.collect || []);

});
/*
session
服务器端的一种临时存储机制（存在过期时间）等价于客户端的cookie或者localStorage本地临时存储
一台服务器对应很多客户端，为了区分哪些数据是哪些客户端让其存储的，服务器端的session和客户端（cookie）有一定的关联=》和客户端对应唯一的标识码：sessionId
当服务器端设置session之后，在返回给客户端的信息中，在响应头信息中会增加一个cookie的字段，存储的信息中包含sessionId
*/
module.exports = route;

/*
* async await
* 1、如果当前方法中使用了await，那么所在的方法必须是基于async修饰的，否则属于语法错误
* 2、await 通常用来接收一个函数（返回promise对象的函数）中resolve后的结果
* 3、async可以把一个函数的返回值包一层promise
*/

/*
async function fn() {
    return 100;
}
fn.then(res=>{
    return res;
});*/
