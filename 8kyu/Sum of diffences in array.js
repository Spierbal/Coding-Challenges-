const sumOfDifferences = arr => {
  return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
};

// Solution 2:
/* function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let sum = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        sum = sum + arr[i] - arr[i + 1];
    }
    return sum;
} */

// Solution 3:
/* const sumOfDifferences = arr => {
  return arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
}; */

// console.log(sumOfDifferences([1, 2, 10])); // --> 9
