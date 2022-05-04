function negate(a) {
  // your code here
  return a !== true;
}

function both(a, b) {
  // your code here
  return a && b;
}

function either(a, b) {
  // your code here
  return a || b;
}

function none(a, b) {
  // your code here
  return !a && !b;
}

function one(a, b) {
  // your code here
  return a === !b;
}

function truthiness(a) {
  // your code here
  return Boolean(a);
}

function isEqual(a, b) {
  // your code here
  return a === b;
}

function isGreaterThan(a, b) {
  // your code here
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
}

function isOdd(a) {
  // your code here
  return a % 2 !==0;
}
function isEven(a) {
  // your code here
  return a % 2 === 0;
}

function isSquare(a) {
  // your code here
  return Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  // your code here
  return char === string[0];
  return string.startsWith(char);
}

function containsVowels(string) {
  // your code here
  return string.search ('[AEIOUaeiou]') >= 0;
}

function isLowerCase(string) {
  // your code here
  return string.toLowerCase () === string;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
