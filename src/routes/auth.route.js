const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller.js');

// Create a new User
router.post('/auth/register', auth.create);

module.exports = router;
