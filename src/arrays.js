const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array,element];
};

const removeNthElement = (index, array) => {
  array.splice (index,1);
};

const numbersToStrings = numbers => {
  return numbers.map(numbers=> numbers.toString())
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(even => even % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    return (
      string[0] === "a" ||
      string[0] === "e" ||
      string[0] === "i" ||
      string[0] === "o" ||
      string[0] === "u" ||
      string[0] === "A" ||
      string[0] === "E" ||
      string[0] === "I" ||
      string[0] === "O" ||
      string[0] === "U"
    );
  });
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer);
};

const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
