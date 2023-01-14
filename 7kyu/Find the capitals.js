const capitals = word => word.match(/[A-Z]/g).map(el => word.indexOf(el));

// Solution 1b:
// const capitals = word =>
//   [...word.replace(/[a-z]/g, "")].map(el => word.indexOf(el));

// Solution 2:
/* function capitals(word) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
} */

/* function capitals(word) {
  let arr = [];
  for (let letter of word) {
    if (letter == letter.toUpperCase()) {
      arr.push(word.indexOf(letter));
    }
  }
  return arr;
} */

console.log(capitals("CodEWaRas")); // [0,3,4,6]
