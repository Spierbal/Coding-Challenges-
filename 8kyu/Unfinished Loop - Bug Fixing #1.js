function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// Solution 2:
const createArray = num => [...Array(num)].map((_, i) => i + 1);

// console.log(counter(4)) --> // --> [1, 2, 3, 4]
// console.log(counter(7)) --> // --> [1, 2, 3, 4, 5, 6, 7]
