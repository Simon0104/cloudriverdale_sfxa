const express = require('express');
const router = express.Router();
const {getCashflow} = require('../controllers/cashFlowController');

router.get('/', getCashflow);
module.exports = router;