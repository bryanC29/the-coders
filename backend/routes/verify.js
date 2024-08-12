const express = require('express');
const router = express.Router();

const verification = require('../controllers/verify');

router.route('/user').get(verification.userVerification);
router.route('/certificate').get(verification.certificateVerification);

module.exports = router;