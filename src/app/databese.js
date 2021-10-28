<<<<<<< HEAD
const mysql = require('mysql2');
const config = require('./config');
// 创建数据库连接池
const connection = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
});
connection.getConnection((err, conn) => {
    conn.connect(err => {
        if (err) {
            console.log("数据库连接失败", err);
        } else {
            console.log('数据库链接成功');
        }
    })
});
// 用promise作为导出
=======
const mysql = require('mysql2');
const config = require('./config');
// 创建数据库连接池
const connection = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
});
connection.getConnection((err, conn) => {
    conn.connect(err => {
        if (err) {
            console.log("数据库连接失败", err);
        } else {
            console.log('数据库链接成功');
        }
    })
});
// 用promise作为导出
>>>>>>> 7fd3c56 (第二次)
module.exports = connection.promise();