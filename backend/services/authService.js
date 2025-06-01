const axios = require('axios');
const dotenv = require('dotenv');
const qs = require('querystring');
dotenv.config();


const {
  XERO_CLIENT_ID,
  XERO_CLIENT_SECRET,
  XERO_REDIRECT_URI
} = process.env


// Get the Xero authorization link
function getAuthUrl(state = '/xero/dashboard') {
  const scope = [
    'openid',
    'profile',
    'email',
    'accounting.transactions',
    "accounting.settings",
    'payroll.employees',
    'files',
    'files.read',
    'offline_access'
  ].join(' ');

  const authUrl = `https://login.xero.com/identity/connect/authorize?` +
    `response_type=code&client_id=${XERO_CLIENT_ID}` + 
    `&redirect_uri=${XERO_REDIRECT_URI}` +
    `&scope=${encodeURIComponent(scope)}` + 
    `&state=${encodeURIComponent(state)}`;
  return authUrl;
}

// Use authorization code to exchange for Access Token + Obtain tenantId
async function handleCallback(code, req) {
  const tokenUrl = await axios.post(
    'https://identity.xero.com/connect/token',
    qs.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: XERO_REDIRECT_URI,
      client_id: XERO_CLIENT_ID,
      client_secret: XERO_CLIENT_SECRET
    }),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  );

  const { 
    access_token, 
    refresh_token, 
    expires_in,
    id_token,
    token_type,
    scope,
    authentication_event_id
  } = tokenUrl.data;

  const tenantRes = await axios.get('https://api.xero.com/connections', {
    headers: { Authorization: `Bearer ${access_token}` }
  });

  const tenantId = tenantRes.data[0]?.tenantId;

  const tokenSet = {
    access_token,
    refresh_token,
    id_token,
    token_type,
    scope,
    authentication_event_id,
    expires_in,
    expires_at: Date.now() + expires_in * 1000,
    tenant_id: tenantId
  };

  // ✅ 保存进 session
  req.session.tokenSet = tokenSet;
  req.session.tenantId = tenantId;
}


// ✅ refresh Access Token

async function getValidToken(req) {
  const tokenData = req.session.tokenSet;
  // console.log('session:', req.session);

  if (!tokenData?.access_token || !tokenData?.refresh_token) {
    throw new Error('❌ Token does not exist in session, please authorize first');
  }

  const now = Date.now();
  const threshold = 120000; // Refresh 2 minutes early
  if (now < tokenData.expires_at - threshold) {
    return tokenData; // ✅ Token still valid
  }

  console.log('🔁 Access token has expired, preparing to refresh...');

  const res = await axios.post(
    'https://identity.xero.com/connect/token',
    qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: tokenData.refresh_token,
      client_id: XERO_CLIENT_ID,
      client_secret: XERO_CLIENT_SECRET
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const { access_token, refresh_token, expires_in } = res.data;

  const newTokenData = {
    access_token,
    refresh_token,
    tenant_id: tokenData.tenant_id,
    expires_at: Date.now() + expires_in * 1000
  };

  req.session.tokenSet = newTokenData;
  console.log('✅ Token refreshed and saved in session.');

  return newTokenData;
}


module.exports = {
    getAuthUrl,
    handleCallback,
    getValidToken
};

console.log('🔎 Verifying credentials:', {
  client_id: XERO_CLIENT_ID,
  client_secret: XERO_CLIENT_SECRET?.slice(0, 4) + '***' + XERO_CLIENT_SECRET?.slice(-4)
});
