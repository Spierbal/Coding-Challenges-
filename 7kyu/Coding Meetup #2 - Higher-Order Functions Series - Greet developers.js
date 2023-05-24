// Solution 1: map() and spread operator
const greetDevelopers1 = list =>
  list.map(dev => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));

// Solution 1b: mutates original array
/* const greetDevelopers = list =>
  list.map(
    dev =>
      (dev.greeting = `${dev.firstName}, what do you like the most about ${dev.language}?`)
  ); */

/* 
// Solution 2: Array.from()
function greetDevelopers2(list) {
  return Array.from(list, dev => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));
}
 */

/* 
//  Solution 3: for loop
function greetDevelopers3(list) {
  const arr = [];

  for (let i = 0; i < list.length; i++) {
    arr.push({
      ...list[i],
      greeting: `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`,
    });
  }

  return arr;
} */

/* 
//  Solution 4: for of loop
function greetDevelopers4(list) {
  const newList = [];

  for (const dev of list) {
    newList.push({
      ...dev,
      greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
    });
  }
  return newList;
} */

/* 
const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

const answer = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
    greeting: "Hi Sofia, what do you like the most about Java?",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
    greeting: "Hi Lukas, what do you like the most about Python?",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
    greeting: "Hi Madison, what do you like the most about Ruby?",
  },
]; */

// console.log(greetDevelopers(list1)); // answer
