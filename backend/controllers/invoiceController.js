const { getInvoices } = require('../services/xeroInvoiceService');



exports.getInvoices = async (req, res) => {
  try {
    const invoices = await getInvoices(req);
    res.json(invoices); // ✅ JSON array
  } catch (err) {
    console.error("❌ getInvoices failed:", err);
    res.status(500).json({ error: 'Failed to fetch invoices' });
  }
};

