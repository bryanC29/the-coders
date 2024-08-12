const express = require('express');
const router = express.Router();

const users = require('../controllers/user');

router.route('/login').post(users.login);
router.route('/signup').post(users.register);

module.exports = router;