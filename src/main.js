<<<<<<< HEAD
// 整个程序的入口越简单越好
const app = require('./app')
    // 查看是否连接数据库成功
require('./app/databese')
const config = require('./app/config')
app.listen(config.APP_PORT, () => {
    console.log(`服务器在${config.APP_PORT}端口启动成功`);
=======
// 整个程序的入口越简单越好
const app = require('./app')
    // 查看是否连接数据库成功
require('./app/databese')
const config = require('./app/config')
app.listen(config.APP_PORT, () => {
    console.log(`服务器在${config.APP_PORT}端口启动成功`);
>>>>>>> 7fd3c56 (第二次)
});