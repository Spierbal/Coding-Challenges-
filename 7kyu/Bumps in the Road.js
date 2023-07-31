// Solution 1: filter()
const bump = x =>
  [...x].filter(char => char === "n").length <= 15 ? "Woohoo!" : "Car Dead";

/* 
// Solution 2: reduce() 
function bump(x) {
    const bumps = [...x].reduce((count, char) => {
        if (char === "n") count++;
        return count;
    }, 0);
    
    return bumps <= 15 ? "Woohoo!" : "Car Dead";
}   */

/* 
// Solution 2b: reduce (concise)
const bump = x =>
  [...x].reduce((char, b) => char + (b === "n"), 0) <= 15 ? "Woohoo!" : "Car Dead"; 
 */

/*
// Solution 3: split()
const bump = x => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");

// Solution 3b: More readable
function bump(x) {
  const bumps = x.split("n").length - 1; // Count the number of bumps

  return bumps <= 15 ? "Woohoo!" : "Car Dead";
} */

/* 
// Solution 4: for loop
function bump(x) {
  let bumps = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") bumps++;
  }

  return bumps <= 15 ? "Woohoo!" : "Car Dead";
} */

/* 
// Solution 5: match()
const bump = x => ((x.match(/n/g) || []).length <= 15 ? "Woohoo!" : "Car Dead"); */

// console.log(bump("__nn_nnnn__n_n___n____nn__nnn")); // "Woohoo!"
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")); // "Woohoo!"
// console.log(bump("_")); // "Woohoo!"
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")); // "Woohoo!"
// console.log(bump("_nnnnnnn_n__n__nn_nn_nnn")); // "Car Dead"
// console.log(bump("______n___n_")); // "Woohoo!"
