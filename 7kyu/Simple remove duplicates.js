const solve = arr => [...new Set([...arr].reverse())].reverse();

// Solution 2:
/* function solve3(arr) {
    return [...arr]
      .reverse()
      .filter((el, i, arr) => arr.indexOf(el) === i)
      .reverse();
  }  */

// Solution 3:
/* const solve2 = arr => arr.filter((num, idx) => arr.lastIndexOf(num) === idx); */

// Solution 4:
/* function solve(arr) {
  let unique = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!unique.includes(arr[i])) unique.unshift(arr[i]);
  }
  return unique;
} */

/* console.log(solve([3, 4, 4, 3, 6, 3])); // [4,6,3]
console.log(solve([1, 2, 1, 2, 1, 2, 3])); // [1,2,3]
console.log(solve([1, 2, 3, 4])); // [1,2,3,4]
console.log(solve([1, 1, 4, 5, 1, 2, 1])); // [4,5,2,1]
console.log(solve([1, 2, 1, 2, 1, 1, 3])); // [2,1,3] */
