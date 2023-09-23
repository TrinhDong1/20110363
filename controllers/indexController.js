
const express = require('express');
const mygroup = require('../models/mygroup');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(mygroup.getAllStudents());
});

module.exports = router;
