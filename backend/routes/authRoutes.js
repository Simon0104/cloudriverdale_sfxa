const express = require('express');
const router = express.Router();
// registration and login controller logic
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // JWT 验证

router.post('/register', register);
router.post('/login', login);

// router.get('/logout', logout);

router.get('/profile', authMiddleware, async (req, res) => {
    res.json({
        message: 'Access granted to protected route',
        user: req.user,
    });
});

module.exports = router;