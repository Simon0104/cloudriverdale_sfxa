const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const { getAuthUrl, handleCallback } = require('../services/authService');




// ✅ Home page
router.get('/', (req, res) => {
    res.send(`
      <h2>✅ Welcome to SFXA Xero Demo</h2>
      <p><a href="/login">🔑 Click here to login with Xero</a></p>
    `);
  });
  
  // Login redirect
  router.get('/login', (req, res) => {
    // const authUrl = getAuthUrl();
    // res.redirect(authUrl);
    const redirect = req.query.redirect || "/xero/dashboard"; // Default go back to the page
    const loginUrl = getAuthUrl(redirect); // ✅ 传入 state
    // Save redirect to session or pass to callback via query.
    res.redirect(loginUrl);
  });
  
  router.get('/callback', asyncHandler(async (req, res) => {
    const { code, state: redirect } = req.query;
    if (!code) {
      return res.status(400).send('Missing `code` from Xero.');
    }
    try {
      await handleCallback(code, req); 
      console.log("✅ Xero login success");
  
      req.session.save(err => {
        if (err) {
          console.error("❌ Session save failed:", err);
          return res.status(500).send("❌ Failed to save session");
        }
      
        console.log("✅ Session save successful. Redirecting...");
        const redirectTo = redirect || "/xero/dashboard";
        return res.redirect(`http://localhost:3000${redirectTo}`);
      });
    } catch (err) {
      console.error("❌ handleCallback error:", err.message);
      res.status(500).send("❌ Failed to complete Xero login");
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

module.exports = router;