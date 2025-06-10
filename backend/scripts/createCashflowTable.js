const pool = require('../config/db')

const createTableQuery = `
CREATE TABLE IF NOT EXISTS cashflow(
        id SERIAL PRIMARY KEY,
        source VARCHAR(255),
        amount NUMERIC(5,2),
        currency VARCHAR(5),
        type VARCHAR(20),
        date DATE,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

pool.query(createTableQuery)
    .then(() => {
        console.log("🙆cashflow创建成功✅");
        process.exit(0);
    })
    .catch((err) => {
        console.log("🙅创建失败❌");
        console.log("错误信息如下:", err.message);
        console.log("🧪 当前数据库名是：", process.env.DB_NAME);
        process.exit(1);
    });











