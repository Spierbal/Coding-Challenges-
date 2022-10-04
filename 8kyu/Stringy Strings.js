const stringy = size =>
  [...Array(size)].map((_, i) => (i % 2 === 0 ? 1 : 0)).join("");

// Solution 2:
/* const stringy = size =>
  Array.from(Array(size), (_, i) => (i % 2 === 0 ? 1 : 0)).join(""); */

// Solution 3:
/* const stringy = size => {
  let str = "";
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str;
}; */

//console.log(stringy(3)); //--> "101"
// console.log(stringy(4)); // --> "1010"
