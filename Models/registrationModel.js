const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
  },
  courses: {
    type: Array,
  },
  coursemethod: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
  },

  profile: {
    type: String,
    trim: true,
  },

  id: {
    type: Array,
    trim: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const student = new mongoose.model("students", studentSchema);
module.exports = student;
