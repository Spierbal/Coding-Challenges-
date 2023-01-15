const firstReverseTry = arr =>
  arr.length > 1 ? [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]] : arr;

/* console.log(firstReverseTry([])); //
console.log(firstReverseTry([1, 2, 3, 4, 5])); // [5,2,3,4,1]
console.log(firstReverseTry([111])); // [111]
console.log(firstReverseTry([-1, 1]));
 */
