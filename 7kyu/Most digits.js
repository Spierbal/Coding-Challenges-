function findLongest(array) {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

/* 
// Solution 1b: More readable reduce
function findLongest(array) {
  return array.reduce((a, b) => {
    const aLength = String(a).length;
    const bLength = String(b).length;
    return aLength > bLength ? a : b;
  });
}
 */
console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
