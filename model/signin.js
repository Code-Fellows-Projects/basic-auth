'use strict';

const mongoose = require('mongoose');

// create our Mongoose Model
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);


module.exports = User;