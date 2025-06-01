const axios = require('axios');
const qs = require('querystring');
const dotenv = require('dotenv');
const {getValidToken} = require('../services/authService');
dotenv.config();

const CLIENT_ID = process.env.XERO_CLIENT_ID;
const CLIENT_SECRET = process.env.XERO_CLIENT_SECRET;
const REDIRECT_URI = process.env.XERO_REDIRECT_URI;


async function getFromXero(req, endpoint, params = {}) {
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
  getInvoices: async (req, params) => {
    const data = await getFromXero(req, 'invoices', params);
    return data.Invoices || [];
  },
  getAccounts: async (req, params) => {
    const data = await getFromXero(req, 'accounts', params);
    return data.Accounts || [];
  },
  getContacts: async (req, params) => {
    const data = await getFromXero(req, 'contacts', params);
    return data.Contacts || [];
  },
  getPayments: async (req, params) => {
    const data = await getFromXero(req, 'payments', params);
    return data.Payments || [];
  }
};