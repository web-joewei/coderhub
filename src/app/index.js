<<<<<<< HEAD
const koa = require('koa');
const bodyParse = require('koa-bodyparser');
const app = new koa;
const userRouter = require('../router/user.router');
const authRouter = require('../router/auth.router');
const useRoutes = require('../router');
const errorHandle = require('./error-handle');
// 中间件注册是有要求的，挨着使用
app.use(bodyParse());
// 动态加载路由
useRoutes(app);
// 监听错误信息
app.on('error', errorHandle)
=======
const koa = require('koa');
const bodyParse = require('koa-bodyparser');
const app = new koa;
const userRouter = require('../router/user.router');
const authRouter = require('../router/auth.router');
const useRoutes = require('../router');
const errorHandle = require('./error-handle');
// 中间件注册是有要求的，挨着使用
app.use(bodyParse());
// 动态加载路由
useRoutes(app);
// 监听错误信息
app.on('error', errorHandle)
>>>>>>> 7fd3c56 (第二次)
module.exports = app;