const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController');
const asyncHandler = require('../utils/asyncHandler'); // 捕获异常
const { verifyToken } = require('../middlewares/authMiddleware'); // JWT 

router.get('/', accountsController.getAccounts);




module.exports = router;
