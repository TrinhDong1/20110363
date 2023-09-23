
const express = require('express');
const mygroup = require('../models/mygroup');

const router = express.Router();

router.get('/:id?', (req, res) => {
  const { id } = req.params;
  if (!id) {
    const studentNames = mygroup.getAllStudentNames();
    const htmlResponse = `<html><body><ul>${studentNames.map((name) => `<li>${name}</li>`).join('')}</ul></body></html>`;
    res.send(htmlResponse);
  } else {
    const student = mygroup.findStudentById(id);
    if (student) {
      const htmlResponse = `<html><body><ul><li>${student.name}</li></ul></body></html>`;
      res.send(htmlResponse);
    } else {
      res.status(404).send('Not valid');
    }
  }
});

module.exports = router;
