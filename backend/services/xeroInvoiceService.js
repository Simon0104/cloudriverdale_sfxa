const { getValidToken } = require('./authService'); // 拿 token
const axios = require('axios');

async function getInvoices(req)  {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.get('https://api.xero.com/api.xro/2.0/Invoices', {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'xero-tenant-id': tenant_id,
      Accept: 'application/json'
    }
  });

  return res.data.Invoices.slice(0, 10) || [];
};

// ✅ 创建发票（保留实现接口）
async function createInvoices (req, invoiceData) {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.post(
    'https://api.xero.com/api.xro/2.0/Invoices',
    { Invoices: [invoiceData] },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'xero-tenant-id': tenant_id,
        'Content-Type': 'application/json'
      }
    }
  );

  return res.data;
};

// ✅ 统一导出
module.exports = {
  getInvoices,
  createInvoices
};
