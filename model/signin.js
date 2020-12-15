'use strict';

const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

// create our Mongoose Model
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});
// pre save hook
// userSchema.pre('save', async function () {
//   //checks to see if the password has changed
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
// })



//model should be gate keeper
// same as signin-routes.js inside try and catch
// going through lab from yesterday 12/15/20
// this method will only run on the model itself NOT the object instance
// you can User.authenticateBasic vs I cannot do new User().authenticateBasic

//usersSchema.statics.authenticateBasic = async function (username, password) {
//   const user = await this.findOne({ username});
//   const valid = await bcrypt.compare(password, user.password);
//   if(valid) { return user; }
//   throw new Error('Invalid User');
// }


const User = mongoose.model('users', userSchema);


module.exports = User;