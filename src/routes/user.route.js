const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller.js');
const verifyToken = require ('../helpers/verifyToken');

// Create a new User
router.post('/user', user.create);
router.get('/users', verifyToken, user.findAll);
router.get('/user/:id', verifyToken, user.findById);
router.patch('/user/:id', verifyToken, user.updateById);
router.delete('/user/:id', verifyToken, user.deleteByID);
router.delete('/users/delete', verifyToken, user.deleteAllUser);

module.exports = router;
