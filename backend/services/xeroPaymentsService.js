const { getValidToken } = require('./authService'); 
const axios = require('axios');

async function getPayments(req) {
  const { access_token, tenant_id } = await getValidToken(req); 

  const res = await axios.get('https://api.xero.com/api.xro/2.0/Payments', {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'xero-tenant-id': tenant_id,
      Accept: 'application/json'
    }
  });
  return res.data.Payments.slice(0, 10) || [];
};

// ✅ 创建支付（保留实现接口）
async function createPayments (req, paymentsData) {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.post(
    'https://api.xero.com/api.xro/2.0/Payments',
    { Invoices: [paymentsData] },
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

module.exports = {
  getPayments,
  createPayments
};
