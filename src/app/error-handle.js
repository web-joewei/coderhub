<<<<<<< HEAD
const errorTypes = require('../constants/error-types');
const errorHandle = (error, ctx) => {
    let status, message;
    // 通过switch对所有的错误逻辑进行统一处理
    switch (error.message) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400; //Bad request
            message = "用户名或密码不能为空"
            break;
        case errorTypes.USER_ALREADY_EXISTS:
            status = 409; //conflict
            message = "用户名已经存在"
            break;
        case errorTypes.USER_DOES_NOT_EXISTS:
            status = 400; //参数错误
            message = "用户名不存在，请去注册"
            break;
        case errorTypes.PASSWORD_IS_INCORRENT:
            status = 400; //参数错误
            message = "密码错误~请重新输入"
            break;
        case errorTypes.UNAUTHORIZATION:
            status = 401; //参数错误
            message = "无效的token~"
            break;
        case errorTypes.UNPERMISSION:
            status = 401; //参数错误
            message = "您不具备操作的权限~"
            break;
        default:
            status = 404;
            message = "NOT FOUND"
    };
    ctx.state = status;
    ctx.body = message
}
=======
const errorTypes = require('../constants/error-types');
const errorHandle = (error, ctx) => {
    let status, message;
    // 通过switch对所有的错误逻辑进行统一处理
    switch (error.message) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400; //Bad request
            message = "用户名或密码不能为空"
            break;
        case errorTypes.USER_ALREADY_EXISTS:
            status = 409; //conflict
            message = "用户名已经存在"
            break;
        case errorTypes.USER_DOES_NOT_EXISTS:
            status = 400; //参数错误
            message = "用户名不存在，请去注册"
            break;
        case errorTypes.PASSWORD_IS_INCORRENT:
            status = 400; //参数错误
            message = "密码错误~请重新输入"
            break;
        case errorTypes.UNAUTHORIZATION:
            status = 401; //参数错误
            message = "无效的token~"
            break;
        case errorTypes.UNPERMISSION:
            status = 401; //参数错误
            message = "您不具备操作的权限~"
            break;
        default:
            status = 404;
            message = "NOT FOUND"
    };
    ctx.state = status;
    ctx.body = message
}
>>>>>>> 7fd3c56 (第二次)
module.exports = errorHandle;