const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  const newArray = [];
  for (let index = 0; index < people.length; index++) {
    newArray.push(people[index].age);
  }
  return newArray;
  // let result = people.map(person => person.age);
  // return result;
};

const findByName = (name, people) => {
  let person;
  for (let index = 0; index < people.length; index++) {
    if (people[index].name === name) {
      person = people[index];
    }
  }
  return person;
  // let person = people.find(obj => obj.name === name);
  // return person;
};

const findHondas = cars => {
  const newArray = [];
  for (let index = 0; index < cars.length; index++) {
    if (cars[index].manufacturer === "Honda") {
      newArray.push(cars[index]);
    }
  }
  return newArray;
  // let hondas = cars.filter(obj => obj.manufacturer === 'Honda');
  // return hondas;
};

const averageAge = people => {
  let totalAge = 0;
  for (let i = 0; i < people.length; i+=1) {
    totalAge += people[i].age;
  }
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(greeter) {
      return `Hi ${greeter}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
