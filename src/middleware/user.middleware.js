<<<<<<< HEAD
const errorTypes = require('../constants/error-types');
const service = require('../service/user.service');

// 中间件应该是一个个单独的函数
const verifyUser = async(ctx, next) => {
    // 1、获取用户账号密码
    const { name, password } = ctx.request.body;
    // 2、判断用户名和密码不能为空
    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 3、判断这次注册的用户名是否被注册过
    const result = await service.getUserName(name);
    console.log(result);
    if (result.length) {
        const error = new Error(errorTypes.USER_ALREADY_EXISTS);
        return ctx.app.emit('error', error, ctx);
    }
    // 只有满足验证条件才能执行下一个中间件，也就是create
    // 因为下一个中间件有异步操作，等到异步操作做完才能返回，所以要加await 
    await next();
};

module.exports = {
    verifyUser
=======
const errorTypes = require('../constants/error-types');
const service = require('../service/user.service');

// 中间件应该是一个个单独的函数
const verifyUser = async(ctx, next) => {
    // 1、获取用户账号密码
    const { name, password } = ctx.request.body;
    // 2、判断用户名和密码不能为空
    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 3、判断这次注册的用户名是否被注册过
    const result = await service.getUserName(name);
    console.log(result);
    if (result.length) {
        const error = new Error(errorTypes.USER_ALREADY_EXISTS);
        return ctx.app.emit('error', error, ctx);
    }
    // 只有满足验证条件才能执行下一个中间件，也就是create
    // 因为下一个中间件有异步操作，等到异步操作做完才能返回，所以要加await 
    await next();
};

module.exports = {
    verifyUser
>>>>>>> 7fd3c56 (第二次)
}