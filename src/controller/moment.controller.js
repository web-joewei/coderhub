<<<<<<< HEAD
const momentService = require('../service/moment.service')
class MomentController {
    async create(ctx, next) {
        // 1、获取数据（user_id,content）
        const userId = ctx.user.id;
        const content = ctx.request.body.content;
        console.log(userId, content);
        // 2、将数据插入到数据库中
        const result = await momentService.create(userId, content);
        ctx.body = result;
    }
    async detail(ctx, next) {
        // (1)、获取数据（momentId）
        const momentId = ctx.params.momentId;
        // (2)、根据momentId去数据表查询这条数据
        const result = await momentService.getMomentById(momentId);
        ctx.body = result;

    }

    async list(ctx, next) {
        const { offset, size } = ctx.query;
        const result = await momentService.getMomentList(offset, size);
        ctx.body = result;
    }

    async update(ctx, next) {
        // 1、获取参数
        const { momentId } = ctx.params;
        const { content } = ctx.request.body;
        // 2、修改内容
        const result = await momentService.update(content, momentId);
        ctx.body = result;
    }

    async remove(ctx, next) {
        // 1、获取参数
        const { momentId } = ctx.params;
        // 2、删除指定的内容
        const result = await momentService.remove(momentId);
        ctx.body = result;
    }
}

=======
const momentService = require('../service/moment.service')
class MomentController {
    async create(ctx, next) {
        // 1、获取数据（user_id,content）
        const userId = ctx.user.id;
        const content = ctx.request.body.content;
        console.log(userId, content);
        // 2、将数据插入到数据库中
        const result = await momentService.create(userId, content);
        ctx.body = result;
    }
    async detail(ctx, next) {
        // (1)、获取数据（momentId）
        const momentId = ctx.params.momentId;
        // (2)、根据momentId去数据表查询这条数据
        const result = await momentService.getMomentById(momentId);
        ctx.body = result;

    }

    async list(ctx, next) {
        const { offset, size } = ctx.query;
        const result = await momentService.getMomentList(offset, size);
        ctx.body = result;
    }

    async update(ctx, next) {
        // 1、获取参数
        const { momentId } = ctx.params;
        const { content } = ctx.request.body;
        // 2、修改内容
        const result = await momentService.update(content, momentId);
        ctx.body = result;
    }

    async remove(ctx, next) {
        // 1、获取参数
        const { momentId } = ctx.params;
        // 2、删除指定的内容
        const result = await momentService.remove(momentId);
        ctx.body = result;
    }
}

>>>>>>> 7fd3c56 (第二次)
module.exports = new MomentController();