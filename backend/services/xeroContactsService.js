const { getValidToken } = require('./authService'); // 拿 token
const axios = require('axios');

async function getContacts(req) {
  const { access_token, tenant_id } = await getValidToken(req); 

  const res = await axios.get('https://api.xero.com/api.xro/2.0/Contacts', {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'xero-tenant-id': tenant_id,
      Accept: 'application/json'
    }
  });
  return res.data.Accounts?.slice(0, 10) || [];
};

// ✅ 创建联系人（保留实现接口）
async function createContacts(req, contactsData) {
  const { access_token, tenant_id } = await getValidToken(req);

  const res = await axios.post(
    'https://api.xero.com/api.xro/2.0/Contacts',
    { Invoices: [contactsData] },
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
  getContacts,
  createContacts
};