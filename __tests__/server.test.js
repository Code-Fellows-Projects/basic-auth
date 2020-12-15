'use strict';


const { server } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server);

require('@code-fellows/supergoose');

describe('basic auth', () => {
  it('should POST to /signup to create a new user', async () => {
    const newUser = { "username": "stacy", "password": "cats" };
    const expectData = await mockRequest.post('/signup').query(newUser);
    expect(expectData).toBeDefined;
  });

  it('should POST to /signin to login as a user (use basic auth)', async () => {
    const user = { "username": "stacy", "password": "cats" };
    const expectData = await mockRequest.post('/signin').query(user);
    expect(expectData).toBeDefined;
  })

});

// Testing instructions
// POST to /signup to create a new user
// POST to /signin to login as a user (use basic auth)
// Need tests for auth middleware and the routes
// Does the middleware function (send it a basic header)
// Do the routes assert the requirements (signup/signin)
// This is going to require more “end to end” testing that you’ve done in the past
// To test signin, your tests actually need to create a user first, then try and login, so there’s a dependency built in


// from john
// const supergoose = require('@code-fellows/supergoose');
// const { server } = require("../server.js");
// const agent = supergoose(server);
// ....later in a test...
// const newUser = { "username": "stacy", "password": "cats" };
// const response = agent.post('/signin').send(newUser);
// expect(response......)