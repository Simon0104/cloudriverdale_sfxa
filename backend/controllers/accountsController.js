const { getAccounts } = require('../services/xeroAccountsService');



  // 导出控制器
  exports.getAccounts = async (req, res) => {
    try {
      const accounts = await getAccounts(req);
      res.json(accounts);
    } catch (err) {
      console.error("❌ getAccounts failed:", err);
      res.status(500).json({ error: 'Failed to fetch accounts' });
    }
  };
  