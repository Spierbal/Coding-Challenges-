// Solution 1: for of loop with destructuring assignment
function maxTriSum(numbers) {
  const uniqueNumbers = [...new Set(numbers)];
  let [firstMax, secondMax, thirdMax] = [-Infinity, -Infinity, -Infinity];

  for (const num of uniqueNumbers) {
    if (num > firstMax) {
      [firstMax, secondMax, thirdMax] = [num, firstMax, secondMax];
    } else if (num > secondMax) {
      [secondMax, thirdMax] = [num, secondMax];
    } else if (num > thirdMax) {
      thirdMax = num;
    }
  }
  return firstMax + secondMax + thirdMax;
}

/* 
// Solution 1b: for of loop
function maxTriSum(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (const num of uniqueNumbers) {
    if (num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax) {
      thirdMax = num;
    }
  }
  return firstMax + secondMax + thirdMax;
} */

/* 
// Solution 2: set, sort & sum
function maxTriSum(numbers) {
  const sortedUnique = [...new Set(numbers)].sort((a, b) => b - a);

  return sortedUnique[0] + sortedUnique[1] + sortedUnique[2];
} */

/* 
// Solution 3: set, sort, slice & reduce
function maxTriSum(numbers) {
  return [...new Set(numbers)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
} */

/* 
console.log(maxTriSum([3, 2, 6, 8, 2, 3])); //17 (6 + 8 + 3)
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])); //32 (13 + 10 + 9)
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); //18 (8 + 6 + 4)
console.log(maxTriSum([-3, -27, -4, -2, -27, -2])); //-9 (-2 -3 -4)
console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12])); //-33 (-12 -14 -42)
console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])); //232 (108 + 67 + 57)
console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])); //41 (29 + 12 + 0)
console.log(maxTriSum([-2, 0, 2])); //0 (0 + 0 + -2)
console.log(maxTriSum([-2, -4, 0, -9, 2])); //0 (0 + -2 + -4)
console.log(maxTriSum([-5, -1, -9, 0, 2])); //1  (2 + 0 + -1)
*/
