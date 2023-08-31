// Solution 1: filter & join
function sortMyString(S) {
  let even = [...S].filter((_, i) => i % 2 === 0).join("");
  let odd = [...S].filter((_, i) => i % 2 !== 0).join("");

  return `${even} ${odd}`;
}

/* 
// Solution 2: reduce & join
function sortMyString(S) {
  const even = [...S].reduce(
    (acc, chars, i) => {
      i % 2 === 0 ? (acc[0] += chars) : (acc[1] += chars);
      return acc;
    },
    ["", ""]
  );
  return even.join(" ");
} */

/* 
// Solution 2b: concise reduce
const sortMyString = s =>
  [...s].reduce((acc, c, i) => ((acc[i % 2] += c), acc), ["", ""]).join(" "); */

/* 
// Solution 3: for loop
function sortMyString(S) {
  let even = "";
  let odd = "";

  for (let i = 0; i < S.length; i++) {
    i % 2 === 0 ? (even += S[i]) : (odd += S[i]);
  }
  return `${even} ${odd}`;
} */

// console.log000000000(sortMyString("CodeWars")); // "CdWr oeas"
// console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"
