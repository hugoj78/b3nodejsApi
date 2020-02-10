const express = require('express');
const router = express.Router();
const post = require('../controllers/post.controller.js');
const verifyToken = require('../helpers/verifyToken');

// Create a new post
router.post('/post', post.create);
router.get('/post', verifyToken, post.findAll);
router.get('/post/:id', verifyToken, post.findById);
router.patch('/post/:id', verifyToken, post.updateById);
router.delete('/post/:id', verifyToken, post.deleteByID);
router.delete('/post/delete', verifyToken, post.deleteAllPost);

module.exports = router;
