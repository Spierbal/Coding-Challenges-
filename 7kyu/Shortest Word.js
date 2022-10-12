const findShort = s => Math.min(...s.split(" ").map(word => word.length));

// Solution 2:
/* const findShort = s => {
  return s
    .split(" ")
    .reduce((min, word) => Math.min(min, word.length), Infinity);
};
 */

// Solution 3:
/* function findShort(str) {
  const arr = str.split(" ");
  let smallest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < smallest) {
      smallest = arr[i].length;
    }
  }
  return smallest;
} */

// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // --> 3
