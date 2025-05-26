const { getAccounts } = require('../services/xeroAccountsService');

// 渲染函数
function renderJsonList(data, key){
    const list = Array.isArray(data) ? data : data?.[key] || [];
    return `<pre>${JSON.stringify(list.slice(0, 10), null, 2)}</pre>`;
  }

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
  