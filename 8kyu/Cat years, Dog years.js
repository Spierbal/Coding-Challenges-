// Solution 1: if else statement
function humanYearsCatYearsDogYears(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  if (humanYears === 1) {
    catYears = dogYears = 15;
  } else if (humanYears === 2) {
    catYears = dogYears = 24;
  } else {
    const subsequentYears = humanYears - 2;
    catYears = 24 + subsequentYears * 4;
    dogYears = 24 + subsequentYears * 5;
  }

  return [humanYears, catYears, dogYears];
}

/* 
// Solution 2: if statement
function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears >= 3) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
} */

/* 
// Solution 3: concise
const humanYearsCatYearsDogYears = humanYears => {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];

  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
}; */

// console.log(humanYearsCatYearsDogYears(1)); // --> [1, 15, 15]
// console.log(humanYearsCatYearsDogYears(2)); // --> [2, 24, 24]
// console.log(humanYearsCatYearsDogYears(3)); // --> [3, 28, 29]
// console.log(humanYearsCatYearsDogYears(4)); // --> [4, 32, 34]
// console.log(humanYearsCatYearsDogYears(5)); // --> [5, 36, 39]
// console.log(humanYearsCatYearsDogYears(10)); // --> [10, 56, 64]
