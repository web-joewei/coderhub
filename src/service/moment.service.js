<<<<<<< HEAD
const connection = require('../app/databese');
class MomentService {
    async create(userId, content) {
            const statement = `INSERT INTO moment (user_Id,content) VALUES (?,?);`;
            const [result] = await connection.execute(statement, [userId, content]);
            // 不是查询，不是数组形式
            return result;
        }
        // 查询单个动态信息
    async getMomentById(id) {
        const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name) author
        FROM moment m
        LEFT JOIN users u ON m.user_id = u.id
        WHERE m.id = ?;`;
        const [result] = await connection.execute(statement, [id]);
        return result[0];
    }

    async getMomentList(offset, size) {
        const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name) author
        FROM moment m
        LEFT JOIN users u ON m.user_id = u.id
        LIMIT ?,?;`;
        const [result] = await connection.execute(statement, [offset, size]);
        return result;
    }

    async update(content, momentId) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
        const [result] = await connection.execute(statement, [content, momentId]);
        return result;
    }

    async remove(momentId) {
        const statement = `DELETE FROM moment WHERE id = ?;`;
        const result = await connection.execute(statement, [momentId]);
        return result;
    }
}
=======
const connection = require('../app/databese');
class MomentService {
    async create(userId, content) {
            const statement = `INSERT INTO moment (user_Id,content) VALUES (?,?);`;
            const [result] = await connection.execute(statement, [userId, content]);
            // 不是查询，不是数组形式
            return result;
        }
        // 查询单个动态信息
    async getMomentById(id) {
        const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name) author
        FROM moment m
        LEFT JOIN users u ON m.user_id = u.id
        WHERE m.id = ?;`;
        const [result] = await connection.execute(statement, [id]);
        return result[0];
    }

    async getMomentList(offset, size) {
        const statement = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name) author
        FROM moment m
        LEFT JOIN users u ON m.user_id = u.id
        LIMIT ?,?;`;
        const [result] = await connection.execute(statement, [offset, size]);
        return result;
    }

    async update(content, momentId) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
        const [result] = await connection.execute(statement, [content, momentId]);
        return result;
    }

    async remove(momentId) {
        const statement = `DELETE FROM moment WHERE id = ?;`;
        const result = await connection.execute(statement, [momentId]);
        return result;
    }
}
>>>>>>> 7fd3c56 (第二次)
module.exports = new MomentService();