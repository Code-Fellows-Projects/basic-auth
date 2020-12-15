'use strict';

// 3rd part libraries

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const cors = require('cors');
app.use(cors());

//middleware
const signInRoute = require('./routes/signin-routes');
const signUpRoute = require('./routes/signup-routes');



// middleware to parse the body
// process json input and put data on req.body
app.use(express.json());
// process form
app.use(express.urlencoded({ extended: true }));




app.use(logger);
app.use(signUpRoute);
app.use(signInRoute);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('lost port!'); }
    app.listen(port, () => console.log(`Server up ${port}`));
  },
}






// const userRoutes = require('./routes/user')
// const logger = require('./middleware/logger');
// const cors = require('cors');

// // Prepare the express app
// const app = express();
// app.use(cors());


// app.use(logger);
// app.use(userRoutes);
