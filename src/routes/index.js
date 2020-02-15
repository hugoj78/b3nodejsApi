const express = require('express');
const router = express.Router();

const golfRouter = require('./golf.route');
const managerRouter = require('./manager.route');

router.use(golfRouter);
router.use(managerRouter);

module.exports = router;
