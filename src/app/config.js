<<<<<<< HEAD
const dotenv = require('dotenv');
const fs = require('fs');
const { Module } = require('module');
const path = require('path');
dotenv.config();

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));
// console.log(process.env.APP_PORT);

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD

} = process.env;
// 给module.exports再增加两个属性
module.exports.PRIVATE_KEY = PRIVATE_KEY;
=======
const dotenv = require('dotenv');
const fs = require('fs');
const { Module } = require('module');
const path = require('path');
dotenv.config();

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));
// console.log(process.env.APP_PORT);

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD

} = process.env;
// 给module.exports再增加两个属性
module.exports.PRIVATE_KEY = PRIVATE_KEY;
>>>>>>> 7fd3c56 (第二次)
module.exports.PUBLIC_KEY = PUBLIC_KEY;