const express = require('express');
const router = express.Router();

const testMethod = require('../controllers/test');

router.route('/start').post(testMethod.startTest);
router.route('/submit').post(testMethod.submitTest);

module.exports = router;