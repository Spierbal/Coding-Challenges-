function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i = i + integer) {
    multiples.push(i);
  }
  return multiples;
}

// console.log(findMultiples(5, 25)) // --> [5, 10, 15, 20, 25]
// console.log(findMultiples(5, 7)) // --> [5]
// console.log(findMultiples(4, 27)) // --> [4, 8, 12, 16, 20, 24]
