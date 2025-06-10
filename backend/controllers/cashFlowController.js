exports.getCashflow = async (req, res) => {
    try {
      res.json({
        total: 2,
        records: [
          { id: 1, amount: 100, type: 'invoice', date: '2024-06-01' },
          { id: 2, amount: -50, type: 'payment', date: '2024-06-02' }
        ]
      });
    } catch (err) {
      res.status(500).json({ error: '查询失败' });
    }
  };
  