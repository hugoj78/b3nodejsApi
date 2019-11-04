const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller.js');

// Create a new User
router.post('/users', user.create);

module.exports = router;
