const solution = (a, b) =>
  a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

// Solution 2:
// const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

// console.log(solution("45", "1")); // --> '1451' (shorter string on the outside, longer on the inside)
// console.log(solution("13", "200")); -->  '1320013'
// console.log(solution("Soon", "Me")); -->  'MeSoonMe'
