const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller.js');

// Create a new User
router.post('/auth/register', auth.create);
// Find one login
router.post('/auth/login', auth.login);



module.exports = router;
