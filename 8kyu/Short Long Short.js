const solution = (a, b) =>
  a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

// Solution 2:
// const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

// console.log(solution("45", "1"));
// console.log(solution("13", "200"));
