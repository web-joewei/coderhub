<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const errorTypes = require('../constants/error-types');
const userService = require('../service/user.service');
const authService = require('../service/auth.service')
const { PUBLIC_KEY } = require('../app/config');
const app = require('../app');
const verifyLogin = async(ctx, next) => {
    console.log("验证登录的中间件~");
    // 1、获取用户名和密码
    const { name, password } = ctx.request.body;
    // 2、判断账号和密码是否为空
    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    console.log(name, password);
    // 3、判断账号是否在数据表中
    const result = await userService.getUserName(name);
    const user = result[0];
    console.log(user);
    if (!user) {
        const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
    // 4、判断密码是否和数据表中的密码一致
    if (password != user.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT);
        return ctx.app.emit('error', error, ctx);
    }
    ctx.user = user;
    await next();
};

//编写认证相关的中间件
const verifyAuth = async(ctx, next) => {
    console.log("验证授权的中间件~");
    // 1、获取token
    const authorization = ctx.headers.authorization;
    // 如果发送请求携带的token为空值，也是未授权
    if (!authorization) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        return ctx.app.emit('error', error, ctx);
    }
    // authorization里面包含一个不需要的Bearer ，用空的字符串替换掉
    const token = authorization.replace('Bearer ', '');
    // 2、验证token(id,name,颁发过期时间等 )
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"],
        });
        ctx.user = result;
        await next();
        console.log("token验证成功了");
    } catch (err) {
        const error = new Error(errorTypes.UNAUTHORIZATION)
        ctx.app.emit('error', error, ctx);
        console.log("token验证失败了");
    }
}

const verifyPermisson = async(ctx, next) => {
    console.log("验证权限的中间件~");
    // 1、获取参数
    const { momentId } = ctx.params;
    const { id } = ctx.user;
    // 2、查询是否具备权限
    try {
        const isPermission = await authService.checkMoment(momentId, id);
        if (!isPermission) throw new Error();
        await next();
    } catch (err) {
        const error = new Error(errorTypes.UNPERMISSION);
        return ctx.app.emit('error', error, ctx);
    }
}

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermisson
=======
const jwt = require('jsonwebtoken');
const errorTypes = require('../constants/error-types');
const userService = require('../service/user.service');
const authService = require('../service/auth.service')
const { PUBLIC_KEY } = require('../app/config');
const app = require('../app');
const verifyLogin = async(ctx, next) => {
    console.log("验证登录的中间件~");
    // 1、获取用户名和密码
    const { name, password } = ctx.request.body;
    // 2、判断账号和密码是否为空
    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    console.log(name, password);
    // 3、判断账号是否在数据表中
    const result = await userService.getUserName(name);
    const user = result[0];
    console.log(user);
    if (!user) {
        const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
    // 4、判断密码是否和数据表中的密码一致
    if (password != user.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT);
        return ctx.app.emit('error', error, ctx);
    }
    ctx.user = user;
    await next();
};

//编写认证相关的中间件
const verifyAuth = async(ctx, next) => {
    console.log("验证授权的中间件~");
    // 1、获取token
    const authorization = ctx.headers.authorization;
    // 如果发送请求携带的token为空值，也是未授权
    if (!authorization) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        return ctx.app.emit('error', error, ctx);
    }
    // authorization里面包含一个不需要的Bearer ，用空的字符串替换掉
    const token = authorization.replace('Bearer ', '');
    // 2、验证token(id,name,颁发过期时间等 )
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"],
        });
        ctx.user = result;
        await next();
        console.log("token验证成功了");
    } catch (err) {
        const error = new Error(errorTypes.UNAUTHORIZATION)
        ctx.app.emit('error', error, ctx);
        console.log("token验证失败了");
    }
}

const verifyPermisson = async(ctx, next) => {
    console.log("验证权限的中间件~");
    // 1、获取参数
    const { momentId } = ctx.params;
    const { id } = ctx.user;
    // 2、查询是否具备权限
    try {
        const isPermission = await authService.checkMoment(momentId, id);
        if (!isPermission) throw new Error();
        await next();
    } catch (err) {
        const error = new Error(errorTypes.UNPERMISSION);
        return ctx.app.emit('error', error, ctx);
    }
}

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermisson
>>>>>>> 7fd3c56 (第二次)
}