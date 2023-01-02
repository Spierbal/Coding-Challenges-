const stray = n => n.find(num => n.indexOf(num) === n.lastIndexOf(num));

// Solution 1b:
/* const stray2 = n => n.find(num => n.filter(v => num === v).length === 1); */

/* function stray(numbers) {
  const arr = [...numbers].sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
 */

/* console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3 */
