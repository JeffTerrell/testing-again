import Date from '../src/js/date.js';

describe('Date', () => {



test('should correctly create a date object with user inputted date', () => {
  const date = new Date("1983-07-20");
  expect(date.userdate).toEqual("1983-07-20");  
  });
});

