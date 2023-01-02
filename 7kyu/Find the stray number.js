function stray(numbers) {
  const arr = [...numbers].sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

// Solution 2
/* const stray = n => n.find(el => n.indexOf(el) === n.lastIndexOf(el)); */

// Solution 2b:
/* const stray = n => n.filter(el => n.indexOf(el) === n.lastIndexOf(el))[0]; */

// Solution 3:
/* const stray = numbers => numbers.reduce((pre, val) => pre ^ val); */

/* console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3 */
