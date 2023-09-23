
const express = require('express');
const mssvController = require('../controllers/mssvController');
const indexController = require('../controllers/indexController');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.use('/MSSV', mssvController);
router.use('/', indexController);
router.use('/message', messageController);

module.exports = router;
