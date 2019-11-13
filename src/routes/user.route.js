const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller.js');
const verifyToken = require ('../helpers/verifyToken');

// Create a new User
router.post('/users', verifyToken,user.create);
router.get('/users', user.findAll);

module.exports = router;
