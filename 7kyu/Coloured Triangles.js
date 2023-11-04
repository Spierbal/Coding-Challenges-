// Solution 1: for loop
function triangle(row) {
  while (row.length > 1) {
    let result = "";
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        result += row[i];
      } else {
        result += getComplimentaryColour(row[i], row[i + 1]);
      }
    }
    row = result;
  }
  return row;
}

function getComplimentaryColour(c1, c2) {
  if ((c1 === "B" && c2 === "G") || (c1 === "G" && c2 === "B")) return "R";
  if ((c1 === "R" && c2 === "G") || (c1 === "G" && c2 === "R")) return "B";
  if ((c1 === "R" && c2 === "B") || (c1 === "B" && c2 === "R")) return "G";
}

/* 
// Solution 2: recursion
function triangle(row) {
  if (row.length === 1) return row;

  let res = "";

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      res += row[i];
    } else {
      res += ["R", "G", "B"].filter(c => c !== row[i] && c !== row[i + 1])[0];
    }
  }
  return triangle(res);
} */

// console.log(triangle("GB")); //, 'R');
// console.log(triangle("RRR")); //, 'R');
// console.log(triangle("RGBG")); //, 'B');
// console.log(triangle("RBRGBRB")); //, 'G');
// console.log(triangle("RBRGBRBGGRRRBGBBBGG")); //, 'G');
// console.log(triangle("B")); //, 'B');
