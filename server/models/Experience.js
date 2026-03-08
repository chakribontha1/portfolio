const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
    maxlength: [100, 'Role cannot exceed 100 characters']
  },
  period: {
    type: String,
    required: [true, 'Period is required'],
    trim: true,
    maxlength: [100, 'Period cannot exceed 100 characters']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  current: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#6EE7B7',
    trim: true
  },
  bullets: [{
    type: String,
    trim: true
  }],
  tech: [{
    type: String,
    trim: true
  }],
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);

