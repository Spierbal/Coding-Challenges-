// Solution 1: Math.min() and indexOf()
function min(arr, toReturn) {
  const minValue = Math.min(...arr);

  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

/* 
// Solution 2: for loop
function min(arr, toReturn) {
  let minValue = arr[0];
  let minIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIdx = i;
    }
  }
  return toReturn === "value" ? minValue : minIdx;
} */

// console.log(min([1, 2, 3, 4, 5], "value")); // 1
// console.log(min([1, 2, 3, 4, 5], "index")); // 0
