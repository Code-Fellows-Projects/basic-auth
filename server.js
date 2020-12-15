'use strict';

// 3rd part libraries
//require('dotenv').config();
const express = require('express');
const app = express();


// middleware to parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//middleware
const signInRoute = require('./routes/signin-routes');
app.use(signInRoute);
const signUpRoute = require('./routes/signup-routes');
app.use(signUpRoute);



module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('lost port!'); }
    app.listen(port, () => console.log(`Server up ${port}`));
  },
}