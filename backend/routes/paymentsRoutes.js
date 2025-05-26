const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const asyncHandler = require('../utils/asyncHandler'); // 捕获异常
const { verifyToken } = require('../middlewares/authMiddleware'); // JWT 验证（如暂未做可注释）


router.get('/', (paymentsController.getPayments));
module.exports = router;
