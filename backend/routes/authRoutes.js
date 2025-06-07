const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); 
router.get('/auth/url', authController.getAuthUrl);
router.get('/auth/callback', authController.handleCallback);

module.exports = router;