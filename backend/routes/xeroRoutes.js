const express = require('express');
const router = express.Router();
const requireXeroAuth = require('../middlewares/authMiddleware');
const { getValidToken } = require('../services/authService');
const axios = require('axios');

const xeroGet = (endpoint) => async (req, res) => {
  try {
    const { access_token, tenant_id } = await getValidToken(req);
    const resData = await axios.get(`https://api.xero.com/api.xro/2.0/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'xero-tenant-id': tenant_id,
        Accept: 'application/json'
      }
    });
    res.json(resData.data);
  } catch (err) {
    console.error(`❌ Failed to get ${endpoint}:`, err.message);
    res.status(500).json({ error: `Failed to get ${endpoint}` });
  }
};

// ✅ 注册四个数据接口
router.get('/xero/accounts', requireXeroAuth, xeroGet('Accounts'));
router.get('/xero/contacts', requireXeroAuth, xeroGet('Contacts'));
router.get('/xero/invoices', requireXeroAuth, xeroGet('Invoices'));
router.get('/xero/payments', requireXeroAuth, xeroGet('Payments'));

module.exports = router;
