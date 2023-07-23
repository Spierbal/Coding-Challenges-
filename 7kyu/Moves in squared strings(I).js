const vertMirror = str => {
  return str
    .split("\n") // split string into array of strings
    .map(s => [...s].reverse().join("")) // reverse each string in array
    .join("\n");
};

const horMirror = str => str.split("\n").reverse().join("\n");

const oper = (fct, s) => fct(s);

/* 
// Solution 1b:
const vertMirror = str => str.map(s => [...s].reverse().join(""));

const horMirror = str => str.reverse();

const oper = (fct, str) => fct(str.split("\n")).join("\n"); */

// console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")); // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
// console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")); // "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");

// console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")); //, "yeCt\nCSbg\nJVhv\nlVHt"
// console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")); //, "cEYz\nLPKo\ndbrZ\nnjMK"
