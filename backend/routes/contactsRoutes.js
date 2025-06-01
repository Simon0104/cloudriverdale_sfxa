const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const asyncHandler = require('../utils/asyncHandler'); // Catch exception
const {verifyToken} = require('../middlewares/authMiddleware'); // JWT 
router.get('/', asyncHandler(contactsController.getContacts));

module.exports = router;