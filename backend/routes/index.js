const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { getAuthUrl, handleCallback } = require('../services/authService');


// Login redirect
router.get('/login', (req, res) => {
  const redirect = req.query.redirect || "/xero/dashboard"; 
  const loginUrl = getAuthUrl(redirect); 
  res.redirect(loginUrl);
});

router.get('/callback', asyncHandler(async (req, res) => {
  const { code, state: redirect } = req.query;
  if (!code) {
    return res.status(400).send('Missing code from Xero.');
  }
  try {
    await handleCallback(code, req, res); 
    console.log("✅ Xero login success");

    req.session.save(err => {
      if (err) {
        console.error("❌ Session save failed:", err);
        return res.status(500).send("❌ Failed to save session");
      }
      const redirectTo = redirect || "/xero/dashboard";
      return res.redirect(`http://localhost:3000${redirectTo}`);
    });
  } catch (err) {
    console.error("❌ handleCallback error:", err.message);
    res.status(500).send("❌ Failed to login Xero");
  }
}));


// Authorization successful, then jump to the dashboard.
router.get('/dashboard', (req, res) => {
  res.send(`
    <h2>Xero Authorization Successful</h2>
    <ul>
      <a href="/xero/invoices">🧾 View Invoices</a>
      <a href="/xero/accounts">💼 View Accounts</a>
      <a href="/xero/contacts">📇 View Contacts</a>
      <a href="/xero/payments">💰 View Payments</a>
      <a href="/logout">🚪 Logout</a>
    </ul>
  `);
});
router.get("/status", (req, res) => {
  // console.log("🧪 Session check:", req.session);

  const tokenSet = req.session?.tokenSet;
  const tenantId = req.session?.tenantId;

  if (tokenSet && tenantId) {
    return res.json({ connected: true });
  } else {
    return res.json({ connected: false });
  }
});

router.get('/logout', (req, res) =>{
  req.session.destroy(() =>{
    res.redirect('/');
  })
});

module.exports = router;
