const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

//solution 1b:
//const index = (array, n) => (array.length > n ? array[n] ** n : -1);

// Solution 1c:
/* function index(array, n) {
  if (array.length <= n) return -1;

  return Math.pow(array[n], n);
} */
