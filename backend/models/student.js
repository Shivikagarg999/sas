const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
  },
  studentName: {
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
  studentClass: {
    type: String,
    required: true,
  },
  subjectsNeeded: [String], 
  mode: {
    type: String,
    required: true,
  },
  location: {
    city: String,
    area: String,
    pinCode: String,
  },
  preferredDays: [String], 
  budgetPerClass: Number,
  assignedTutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Student', studentSchema);
