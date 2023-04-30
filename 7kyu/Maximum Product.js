// Solution 1: map with slice and Math.max
function adjacentElementsProduct(array) {
  return Math.max(...array.slice(1).map((x, i) => x * array[i]));
}

// Solution 2: for loop
/* function adjacentElementsProduct(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > max) max = product;
  }
  return max;
} */

// Solution 3: reduce
/* function adjacentElementsProduct(array) {
  return array.slice(1).reduce((maxProduct, currentValue, index) => {
    const product = array[index] * currentValue;
    return product > maxProduct ? product : maxProduct;
  }, -Infinity);
} */

/* 
// Positive numbers
console.log(adjacentElementsProduct([5, 8])); // 40);
console.log(adjacentElementsProduct([1, 2, 3])); // 6);
console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); // 48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // 6
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); // 48

// Both positive and negative values
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); // 30
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // 6);

// Contains zeroes
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])); // 0
console.log(adjacentElementsProduct([1, 2, 3, 0])); // 6 
 */
