const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken');

// Create a new post
router.post('/golf', golf.create);
router.get('/golf', golf.findAll);
router.get('/golf/:id', golf.findById);
router.patch('/golf/:id', golf.updateById);
router.delete('/golf/:id', golf.deleteByID);
router.delete('/golf/delete', golf.deleteAllGolfs);

module.exports = router;
