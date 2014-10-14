function Javabuzz (){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this.DivisibleByFifteen(number)) return 'Javabuzz';
  if (this.DivisibleByThree(number)) return 'Java';
  if (this.DivisibleByFive(number)) return 'Buzz';
  return number;

};