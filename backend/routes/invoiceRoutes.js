const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const asyncHandler = require('../utils/asyncHandler'); // Catch exception
const {verifyToken} = require('../middlewares/authMiddleware'); // JWT 


router.get('/', asyncHandler(invoiceController.getInvoices));
module.exports = router;
