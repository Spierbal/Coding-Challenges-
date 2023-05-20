const noOdds = values => values.filter(value => value % 2 === 0);

/* 
// Solution 2: reduce()
function noOdds(values) {
  return values.reduce((result, value) => {
    if (value % 2 === 0) {
      result.push(value);
    }
    return result;
  }, []);
} */

/* 
// Solution 3: for loop
function noOdds(values) {
  let result = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      res.push(values[i]);
    }
  }
  return result;
} */

/* 
// Solution 4: for of loop
function noOdds(values) {
  let res = [];

  for (let value of values) {
    if (value % 2 === 0){
        res.push(value)
    }
  }
  return res;
} */

// console.log(noOdds([0, 1])); // [0]
// console.log(noOdds([0, 1, 2, 3])); // [0,2]
