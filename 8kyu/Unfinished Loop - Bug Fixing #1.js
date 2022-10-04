const createArray = num => [...Array(num)].map((_, i) => i + 1);

// Solution 2:
/* function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
} */

// console.log(counter(4)) --> // --> [1, 2, 3, 4]
// console.log(counter(7)) --> // --> [1, 2, 3, 4, 5, 6, 7]
