import Date from '../src/js/date.js';

describe('Date', () => {



test('should correctly create a date object with user inputted date', () => {
  const date = new Date("1983-07-20");
  expect(date.userDate).toEqual("1983-07-20");  
  });

test('should correctly return the day of the week based on user inputted date', () => {
  const date = new Date("1983-07/20");
  expect(date.getDay).toEqual("Wednesday");
  })  
});

