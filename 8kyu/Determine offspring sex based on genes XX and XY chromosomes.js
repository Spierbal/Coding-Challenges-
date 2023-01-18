const chromosomeCheck = sperm =>
  `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;

// Solution 1b:
/* const chromosomeCheck = sperm =>
  sperm === "XY"
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter."; */

/* console.log(chromosomeCheck("XY"));  // "Congratulations! You're going to have a son."));
console.log(chromosomeCheck("XX"));  */ // "Congratulations! You're going to have a daughter.")
