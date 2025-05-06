const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  location: {
    city: String,
    area: String,
    pinCode: String,
  },
  mode: {
    type: [String], 
    required: true,
  },
  subjects: [
    {
      subject: String,
      classRange: String, 
    }
  ],
  experience: {
    type: String,
  },
  qualifications: {
    type: String,
  },
  availability: {
    days: [String], 
    timeSlots: [String], 
  },
  ratePerClass: {
    type: Number,
  },
  demoGiven: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Tutor', tutorSchema);