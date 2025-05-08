const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');

// Tutor registration endpoint
router.post('/register', async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      gender,
      location,
      mode,
      subjects,
      qualifications,
      experience,
      availability,
      ratePerClass,
      demoGiven
    } = req.body;

    // Basic validation
    if (!fullName || !phone || !location?.city || !location?.area || !location?.pinCode) {
      return res.status(400).json({ error: 'Missing required personal information fields' });
    }

    if (!mode || mode.length === 0) {
      return res.status(400).json({ error: 'At least one teaching mode is required' });
    }

    if (!subjects || subjects.length === 0 || subjects.some(sub => !sub.subject || !sub.classRange)) {
      return res.status(400).json({ error: 'At least one valid subject is required' });
    }

    if (!availability?.days || availability.days.length === 0 || 
        !availability?.timeSlots || availability.timeSlots.length === 0) {
      return res.status(400).json({ error: 'Availability days and time slots are required' });
    }

    // Check for existing tutor with same phone
    const existingTutor = await Tutor.findOne({ phone });
    if (existingTutor) {
      return res.status(400).json({ error: 'Tutor with this phone number already exists' });
    }

    // Create new tutor
    const newTutor = new Tutor({
      fullName,
      phone,
      email,
      gender,
      location,
      mode,
      subjects,
      qualifications,
      experience,
      availability,
      ratePerClass,
      demoGiven: demoGiven || false
    });

    await newTutor.save();

    res.status(201).json({
      success: true,
      message: 'Tutor registered successfully',
      data: newTutor
    });

  } catch (error) {
    console.error('Error registering tutor:', error);
    
    // Handle duplicate key error (phone)
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Tutor with this phone number already exists' });
    }
    
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;