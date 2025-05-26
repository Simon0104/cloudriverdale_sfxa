const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const asyncHandler = require('../utils/asyncHandler'); // 捕获异常
const { verifyToken } = require('../middlewares/authMiddleware'); 


router.get('/', (contactsController.getContacts));

module.exports = router;
