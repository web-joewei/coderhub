<<<<<<< HEAD
const Router = require('koa-router');
const momentRouter = new Router({ prefix: '/moment' });
const { create, detail, list, update, remove } = require('../controller/moment.controller.js')
const { verifyAuth, verifyPermisson } = require('../middleware/auth.middleware')
momentRouter.post('/', verifyAuth, create);
momentRouter.get('/', list);
// 即是没有授权，也可以查看动态信息
momentRouter.get('/:momentId', detail);
momentRouter.patch('/:momentId', verifyAuth, verifyPermisson, update);
momentRouter.delete('/:momentId', verifyAuth, verifyPermisson, remove)
=======
const Router = require('koa-router');
const momentRouter = new Router({ prefix: '/moment' });
const { create, detail, list, update, remove } = require('../controller/moment.controller.js')
const { verifyAuth, verifyPermisson } = require('../middleware/auth.middleware')
momentRouter.post('/', verifyAuth, create);
momentRouter.get('/', list);
// 即是没有授权，也可以查看动态信息
momentRouter.get('/:momentId', detail);
momentRouter.patch('/:momentId', verifyAuth, verifyPermisson, update);
momentRouter.delete('/:momentId', verifyAuth, verifyPermisson, remove)
>>>>>>> 7fd3c56 (第二次)
module.exports = momentRouter;