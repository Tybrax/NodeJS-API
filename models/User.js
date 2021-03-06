const { string } = require('@hapi/joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 20
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 30
  },
  // Add an embedded object for a user setting
  settings: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)