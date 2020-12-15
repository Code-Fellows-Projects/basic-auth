const middleWareLogger = require('../middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on the next method

  beforeEach(() => {

    consoleSpy = jest.spyOn(console, 'log').mockImplementation(); // Attach to the console
  });

  afterEach(() => {

    consoleSpy.mockRestore(); // puts the console back
  });

  it('logs output', () => {
    middleWareLogger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})