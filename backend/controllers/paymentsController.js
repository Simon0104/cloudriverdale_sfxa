const { getPayments } = require('../services/xeroPaymentsService');

function renderJsonList(data, key){
    const list = Array.isArray(data) ? data : data?.[key] || [];
    return `<pre>${JSON.stringify(list.slice(0, 10), null, 2)}</pre>`;
  }

  exports.getPayments = async (req, res) => {
    try {
      const data = await getPayments(req);
      res.json(data); // ✅ 返回 JSON
    } catch (err) {
      console.error("❌ getPayments failed:", err);
      res.status(500).json({ error: 'Failed to fetch payments' });
    }
  };