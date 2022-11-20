function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// Solution 1b:
// function seatsInTheater(nCols, nRows, col, row) {
//   return (nCols - (col - 1)) * (nRows - row);
// }

// console.log(seatsInTheater(16, 11, 5, 3)); // --> 96;