const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false, // 关闭日志
    }
)

module.exports = sequelize;


// /这部分代码是数据库连接的配置文件，使用 Sequelize 作为 ORM 框架连接 PostgreSQL 数据库。通过读取环境变量配置数据库连接信息，确保代码的灵活性和安全性。具体实现如下：
// 1. 引入 Sequelize 模块：
// const { Sequelize } = require('sequelize');
// 2. 引入 dotenv 模块：
// require('dotenv').config();
// 3. 创建 Sequelize 实例：
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'postgres',
//         logging: false, // 关闭日志
//     }
// )



// sudo aws s3 cp s3://developerenv-mybucket-test1/sfxa_testv1/sfxa_ingestion.zip /home/ssm-user/