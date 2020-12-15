'use strict';


const express = require('express');
const User = require('../model/signin');
const router = express.Router();
const bcrypt = require('bcrypt');

// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

// Signup route -- create a new user
router.post('/signup', async (req, res) => {
  console.log(req.body);
  // req.body = { username: 'stacy', password: 'cats' }

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // req.body = { username: 'stacy', password: 'LVHm8i1nktDNOY2NwZd65iVnE4ll0TLhfbyIdJhKXI5y' }
    const user = new User(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (error) { res.status(403).send('error creating user'); }
});

module.exports = router;