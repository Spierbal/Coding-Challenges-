const mergeArrays = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

//Solution 1b: Same as above but less short
// function mergeArrays(arr1, arr2) {
//   let mergeArr = [...arr1, ...arr2].sort((a, b) => a - b);
//   return [...new Set(mergeArr)];
// }

// console.log(mergeArrays([1,2,3,4], [5,6,7,8])); // --> [1,2,3,4,5,6,7,8]
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
