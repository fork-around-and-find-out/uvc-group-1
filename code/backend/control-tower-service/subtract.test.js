const subtract = require('./subtract');

test('subtracts 2 from 4 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});