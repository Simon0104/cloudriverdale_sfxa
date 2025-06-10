const pool = require('../config/db');

async function insertCashflowData(dataList){
    const insertQuery = `
        INSERT INTO cashflow (source, amount, currency, type, date)
        VALUES ($1, $2, $3, $4, $5)
    `;
    for(const item of dataList){
        const values = [
            item.source || 'Xero',
            item.amount,
            item.currency || 'AUD',
            item.type,
            item.date,
        ];
        await pool.query(insertQuery, values);
    }
}

module.exports = insertCashflowData


// This code is suitable for small batch inserts. 
// If you need to insert hundreds or even thousands of records later, consider:

// Using Promise.all() + concurrent inserts ✅ (moderate)

// Using COPY or batch syntax ✅ (high performance)