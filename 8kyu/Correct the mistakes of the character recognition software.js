const correct = s => s.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");

//Solution 2:

// const makeCorrections = {
//   5: "S",
//   0: "O",
//   1: "I",
// };

//const correct = s => s.replace(/[501]/g, char => makeCorrections[char]);

//console.log(correct("L0ND0N")); // --> LONDON
//console.log(correct("DUBL1N")); // --> DUBLIN
//console.log(correct("BUDAPE5T")); // --> BUDAPEST
