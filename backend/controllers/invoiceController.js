const { getInvoices } = require('../services/xeroInvoiceService');


function renderJsonList(data, key){
    const list = Array.isArray(data) ? data : data?.[key] || [];
    return `<pre>${JSON.stringify(list.slice(0, 10), null, 2)}</pre>`;
  }

  exports.getInvoices = async (req, res) => {
    try {
      const invoices = await getInvoices(req);
      res.json(invoices); // ✅ JSON array
    } catch (err) {
      console.error("❌ getInvoices failed:", err);
      res.status(500).json({ error: 'Failed to fetch invoices' });
    }
  };

