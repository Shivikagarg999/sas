const express = require('express');
const router = express.Router();
const Student = require('../models/student'); 

// POST route to create a new student
router.post('/student', async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = ['parentName', 'studentName', 'phone', 'studentClass', 'mode'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Check if phone number already exists
    const existingStudent = await Student.findOne({ phone: req.body.phone });
    if (existingStudent) {
      return res.status(400).json({ error: 'Phone number already registered' });
    }

    // Create new student
    const newStudent = new Student({
      parentName: req.body.parentName,
      studentName: req.body.studentName,
      phone: req.body.phone,
      email: req.body.email || '',
      studentClass: req.body.studentClass,
      subjectsNeeded: req.body.subjectsNeeded || [],
      mode: req.body.mode,
      location: req.body.location || {
        city: '',
        area: '',
        pinCode: ''
      },
      preferredDays: req.body.preferredDays || [],
      budgetPerClass: req.body.budgetPerClass || null,
      // assignedTutorId is not set here as it will be assigned later
    });

    // Save to database
    const savedStudent = await newStudent.save();

    // Return success response
    res.status(201).json({
      message: 'Student registered successfully',
      student: savedStudent
    });

  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all students (optional)
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find().populate('assignedTutorId');
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;