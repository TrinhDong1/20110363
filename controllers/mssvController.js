
const express = require('express');
const mygroup = require('../models/mygroup');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const student = mygroup.find((student) => student.id === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

router.post('/', (req, res) => {
  const newStudent = req.body;
  if (mygroup.isValidStudent(newStudent)) {
    const existingStudent = mygroup.findStudentById(newStudent.id);
    if (!existingStudent) {
      mygroup.addStudent(newStudent);
      res.status(201).json(newStudent);
    } else {
      res.status(400).json({ error: 'Student already exists' });
    }
  } else {
    res.status(400).json({ error: 'Not valid' });
  }
});

module.exports = router;
