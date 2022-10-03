const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

//solution 1b:
//const index = (array, n) => (array.length > n ? array[n] ** n : -1);

// Solution 1c:
/* function index(array, n) {
  if (array.length <= n) return -1;

  return Math.pow(array[n], n);
} */

// Examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

//console.log(index([1, 2, 3, 4], 2)) // --> 9
//console.log(index(index([1,1,1,1,1,1,1,1,1,2], 9)) --> 512
