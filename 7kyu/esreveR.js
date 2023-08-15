// Solution 1: Two-Pointer Swap
function reverse(array) {
  const reversed = [...array];

  // Initialize pointers
  let left = 0;
  let right = reversed.length - 1;

  // Swap elements until pointers meet in the middle
  while (left < right) {
    [reversed[left], reversed[right]] = [reversed[right], reversed[left]];
    left++;
    right--;
  }
  return reversed;
}

/* 
// Solution 2: for loop & push()
function reverse(array) {
  const reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
} */

/* 
// Solution 3: map()
// const reverse = array => array.map((_, i, arr) => arr[arr.length - 1 - i]);
 */

/* 
// Solution 4: reduce()
const reverse = arr => arr.reduce((reversed, item) => [item, ...reversed], []);
 */

// console.log(reverse([1, 2, 3])); // [3,2,1]
// console.log(reverse([10, 20, 30, 40, 50])); // [3,2,1]
// console.log(reverse([1, null, 14, "two"])); // ["two",14,null,1]
