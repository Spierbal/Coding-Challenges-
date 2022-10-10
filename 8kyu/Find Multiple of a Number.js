function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
}

// Solution 2:
// const findMultiples = (int, limit) =>
//   [...Array(Math.floor(limit / int))].map((_, i) => (i + 1) * int);

// Solution 3:
// const findMultiples = (int, limit) =>
//   Array.from({ length: Math.floor(limit / int) }, (_, i) => (i + 1) * int);

// console.log(findMultiples(5, 25)) // --> [5, 10, 15, 20, 25]
// console.log(findMultiples(5, 7)) // --> [5]
// console.log(findMultiples(4, 27)) // --> [4, 8, 12, 16, 20, 24]
