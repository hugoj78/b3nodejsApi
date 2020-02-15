const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');

// Create a new post
router.post('/manager', manager.create);
router.get('/manager', manager.findAll);
router.get('/manager/:id', manager.findById);
router.patch('/manager/:id', manager.updateById);
router.delete('/manager/:id', manager.deleteByID);
router.delete('/manager/delete', manager.deleteAllManagers);

module.exports = router;
