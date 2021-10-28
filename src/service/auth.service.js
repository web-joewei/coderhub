<<<<<<< HEAD
const connection = require('../app/databese');
// 查询权限
class AuthService {
    async checkMoment(momentId, userId) {
        try {
            const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`;
            const [result] = await connection.execute(statement, [momentId, userId]);
            return result.length === 0 ? false : true;
        } catch (error) {
            console.log(error);
        }
    }
}

=======
const connection = require('../app/databese');
// 查询权限
class AuthService {
    async checkMoment(momentId, userId) {
        try {
            const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`;
            const [result] = await connection.execute(statement, [momentId, userId]);
            return result.length === 0 ? false : true;
        } catch (error) {
            console.log(error);
        }
    }
}

>>>>>>> 7fd3c56 (第二次)
module.exports = new AuthService();