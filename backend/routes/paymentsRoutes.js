const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const asyncHandler = require('../utils/asyncHandler'); // Catch exception
const {verifyToken} = require('../middlewares/authMiddleware'); // JWT 

router.get('/', asyncHandler(paymentsController.getPayments));
module.exports = router;