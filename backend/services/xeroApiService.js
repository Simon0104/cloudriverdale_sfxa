const axios = require('axios');
const qs = require('querystring');
const dotenv = require('dotenv');
const {getValidToken} = require('../services/authService');
dotenv.config();

const CLIENT_ID = process.env.XERO_CLIENT_ID;
const CLIENT_SECRET = process.env.XERO_CLIENT_SECRET;
const REDIRECT_URI = process.env.XERO_REDIRECT_URI;


let open;
(async () => {
  open = (await import('open')).default;
})();

async function getFromXero(endpoint, params = {}) {
  const { access_token, tenant_id } = await getValidToken(req);
  const res = await axios.get(`https://api.xero.com/api.xro/2.0/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'xero-tenant-id': tenant_id,
      Accept: 'application/json'
    },
    params
  });

  return res.data;
}

module.exports = {
  getInvoices: async (params) => {
    const data = await getFromXero('invoices', params);
    return data.Invoices || [];
  },
  getAccounts: async (params) => {
    const data = await getFromXero('accounts', params);
    return data.Accounts || [];
  },
  getContacts: async (params) => {
    const data = await getFromXero('contacts', params);
    return data.Contacts || [];
  },
  getPayments: async (params) => {
    const data = await getFromXero('payments', params);
    return data.Payments || [];
  }
};
