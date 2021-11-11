export default class Jeff {
  constructor(input) {
    this.userDate = input;
  }

  getSomething() {
    let day1 = new Date(this.userDate);
    let day2 = day1.getDay();
    return day2;
  }
}