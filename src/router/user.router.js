<<<<<<< HEAD
const Router = require('koa-router');
const controller = require('../controller/user.controller')
const userRouter = new Router({ prefix: '/users' });
const {
    verifyUser
} = require('../middleware/user.middleware')
userRouter.post('/', verifyUser, controller.create);

=======
const Router = require('koa-router');
const controller = require('../controller/user.controller')
const userRouter = new Router({ prefix: '/users' });
const {
    verifyUser
} = require('../middleware/user.middleware')
userRouter.post('/', verifyUser, controller.create);

>>>>>>> 7fd3c56 (第二次)
module.exports = userRouter;