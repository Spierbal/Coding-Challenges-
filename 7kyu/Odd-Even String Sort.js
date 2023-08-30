// Solution 1: filter & join
function sortMyString(S) {
  let even = [...S].filter((_, i) => i % 2 === 0).join("");
  let odd = [...S].filter((_, i) => i % 2 !== 0).join("");

  return `${even} ${odd}`;
}

// console.log(sortMyString("CodeWars")); // "CdWr oeas"
// console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"
