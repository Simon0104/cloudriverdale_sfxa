const { getPayments } = require('../services/xeroPaymentsService');


  exports.getPayments = async (req, res) => {
    try {
      const data = await getPayments(req);
      res.json(data); // ✅ 返回 JSON
    } catch (err) {
      console.error("❌ getPayments failed:", err);
      res.status(500).json({ error: 'Failed to fetch payments' });
    }
  };