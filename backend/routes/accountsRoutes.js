const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController');
const asyncHandler = require('../utils/asyncHandler'); // Catch exception
const {verifyToken} = require('../middlewares/authMiddleware'); // JWT 
router.get('/', asyncHandler(accountsController.getAccounts));

module.exports = router;
