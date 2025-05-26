const { getValidToken } = require('./authService');
const axios = require('axios');

async function getAccounts(req) {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.get('https://api.xero.com/api.xro/2.0/Accounts', {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'xero-tenant-id': tenant_id,
      Accept: 'application/json'
    }
  });
  return res.data.Accounts?.slice(0, 10) || [];
}


// ✅ 创建账户（保留实现接口）
async function createAccounts(req, accountsData) {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.post(
    'https://api.xero.com/api.xro/2.0/Accounts',
    { Accounts: [accountsData] },  
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'xero-tenant-id': tenant_id,
        'Content-Type': 'application/json'
      }
    }
  );

  return res.data;
}

module.exports = {
  getAccounts,
  createAccounts
};