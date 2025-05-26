const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const asyncHandler = require('../utils/asyncHandler'); // 捕获异常
const { verifyToken } = require('../middlewares/authMiddleware'); 


router.get('/', (invoiceController.getInvoices));
module.exports = router;
