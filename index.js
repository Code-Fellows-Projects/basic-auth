'use strict';

require('dotenv').config();
const server = require('./server');
const mongoose = require('mongoose');


const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGOOSE_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Super Connected!');
});

server.start(process.env.PORT)