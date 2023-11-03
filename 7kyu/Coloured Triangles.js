// Solution 1: for loop
function triangle(row) {
  while (row.length > 1) {
    let res = "";
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        res += row[i];
      } else {
        res += ["R", "G", "B"].filter(c => c !== row[i] && c !== row[i + 1])[0];
      }
    }
    row = res;
  }
  return row;
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
console.log(triangle("RGBG")); //, 'B');
// console.log(triangle("RBRGBRB")); //, 'G');
// console.log(triangle("RBRGBRBGGRRRBGBBBGG")); //, 'G');
// console.log(triangle("B")); //, 'B');
