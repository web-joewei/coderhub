<<<<<<< HEAD
const Router = require('koa-router');
const authRouter = new Router();
// 大括号包着的就是函数
const { login, success } = require('../controller/auth.controller')
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')
    // 定义接口
authRouter.post('/login', verifyLogin, login);
// 验证接口（判断用户访问后面资源时是否登录授权过）
authRouter.get('/test', verifyAuth, success)
=======
const Router = require('koa-router');
const authRouter = new Router();
// 大括号包着的就是函数
const { login, success } = require('../controller/auth.controller')
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')
    // 定义接口
authRouter.post('/login', verifyLogin, login);
// 验证接口（判断用户访问后面资源时是否登录授权过）
authRouter.get('/test', verifyAuth, success)
>>>>>>> 7fd3c56 (第二次)
module.exports = authRouter;