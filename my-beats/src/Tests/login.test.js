const INITIAL_STATE = require('../components/Login.js');

test('tests initialization of login state', () => {
  expect(INITIAL_STATE).toStrictEqual({
    email: '',
    password: '',
    error: null
  });
});
