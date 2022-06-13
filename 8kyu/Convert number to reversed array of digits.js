function digitize(n) {
  const numString = String(n);

  return numString
    .split("")
    .reverse()
    .map(num => {
      return +num;
    });
}

// Solution 2: in one line

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }
