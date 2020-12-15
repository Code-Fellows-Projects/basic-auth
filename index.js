'use strict';

require('dotenv').config();
const server = require('./server');
const mongoose = require('mongoose');



const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGOOSE_URI, options);

server.start(process.env.PORT);