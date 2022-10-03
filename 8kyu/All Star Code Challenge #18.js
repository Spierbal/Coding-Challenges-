// 626 ms (23ms)
const strCount = (str, letter) =>
  str.split("").reduce((a, b) => a + letter.includes(b), 0);

console.log(strCount("Hello", "l")); // 2 (there are two occurences of "l")

// 649 ms // (25ms)
// const strCount = (str, letter) =>
//   [...str].reduce((a, b) => a + letter.includes(b), 0);

// 932 ms // (47ms)
