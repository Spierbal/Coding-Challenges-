const solution = (str, ending) => str.endsWith(ending);

// Solution 2:
/* const solution = (str, ending) =>
  str.slice(str.length - ending.length) === ending; */

// console.log(solution("abcde", "cde")); // --> true;
// console.log(solution('abcde', 'abc')); // --> false;
