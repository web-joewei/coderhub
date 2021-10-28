<<<<<<< HEAD
const connection = require('../app/databese')
class UserService {
    async create(user) {
        // 将user存储到数据库中
        // 对接受的user进行一个解构
        const { name, password } = user;
        const statement = `INSERT INTO users (name,password) values(?,?);`;
        const result = await connection.execute(statement, [name, password]);
        return result[0];
    };
    // 通过用户名查询数据表是否重复
    async getUserName(name) {
        const statement = `SELECT * FROM users WHERE name = ?;`;
        const result = await connection.execute(statement, [name]);
        return result[0];
    }
};

=======
const connection = require('../app/databese')
class UserService {
    async create(user) {
        // 将user存储到数据库中
        // 对接受的user进行一个解构
        const { name, password } = user;
        const statement = `INSERT INTO users (name,password) values(?,?);`;
        const result = await connection.execute(statement, [name, password]);
        return result[0];
    };
    // 通过用户名查询数据表是否重复
    async getUserName(name) {
        const statement = `SELECT * FROM users WHERE name = ?;`;
        const result = await connection.execute(statement, [name]);
        return result[0];
    }
};

>>>>>>> 7fd3c56 (第二次)
module.exports = new UserService();