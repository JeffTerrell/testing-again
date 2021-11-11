import Jeff from '../src/js/date.js';

describe('Jeff', () => {



test('should correctly create a date object with user inputted date', () => {
  const date = new Jeff('July 20, 1983');
  expect(date.userDate).toEqual('July 20, 1983');  
  });

test('should correctly return the day of the week based on user inputted date', () => {
  const date = new Jeff('July 20, 1983');
  expect(date.getSomething()).toEqual(3);
  });
});

