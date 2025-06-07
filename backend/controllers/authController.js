const {getAuthUrl, handleCallback} = require('../services/authService')


exports.getAuthUrl = (req, res) => {
    const state = req.query.state || '/';
    const url = getAuthUrl(state); // 👈 确保这个函数有返回值！
    console.log('✅ 生成授权链接:', url);
    res.json({ url });             // ✅ 关键！必须用 res.json() 包起来！
  };

exports.handleCallback = async (req, res) => {
    try {
      const { code } = req.query;
      await handleCallback(code, req);
      res.redirect('/dashboard'); // 成功后跳转你想去的页面
    } catch (err) {
      console.error('❌ Callback failed:', err.message);
      res.status(500).send('OAuth callback failed');
    }
  };
  

