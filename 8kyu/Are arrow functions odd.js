// Solution 1: filter()
const odds = values => values.filter(value => value % 2);

/* 
// Solution 2: for of loop
function odds(values) {
  let arr = [];
  for (let value of values) {
    if (value % 2 !== 0) {
      arr.push(value);
    }
  }
  return arr;
} */

/* 
// Solution 3: for loop
function odds(values) {
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      arr.push(values[i]);
    }
  }
  return arr;
} */

/* 
// Solution 4: reduce()
function odds(values) {
  return values.reduce((arr, value) => {
    if (value % 2 !== 0) {
      arr.push(value);
    }
    return arr;
  }, []);
} */

// console.log(odds([2, 4, 6])); // --> []
// console.log(odds([1, 3, 5])); // --> [1, 3, 5]
