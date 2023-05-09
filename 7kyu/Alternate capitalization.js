// Solution 1: map() solution with join()
function capitalize(s) {
  const even = [...s]
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : s[i]))
    .join("");
  const odd = [...s].map((c, i) => (i % 2 ? c.toUpperCase() : s[i])).join("");
  return [even, odd];
}

// Solution 2: for loop with ternary operator
/* function capitalize(s) {
  let even = "",
    odd = "";

  for (let i = 0; i < s.length; i++) {
    i % 2 === 0 ? (even += s[i].toUpperCase()) : (even += s[i]);
    i % 2 ? (odd += s[i].toUpperCase()) : (odd += s[i]);
  }

  return [even, odd];
} */

// Solution 2b: for loop with if statement
/* function capitalize(s) {
  let even = "";
  let odd = "";

  for (let i = 0; i < s.length; ++i) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }
  return [even, odd];
} */

// Solution 3: reduce()
/* function capitalize(s) {
  return [...s].reduce(
    (acc, c, i) => {
      acc[0] += i % 2 === 0 ? c.toUpperCase() : c;
      acc[1] += i % 2 ? c.toUpperCase() : c;
      return acc;
    },
    ["", ""]
  );
} */

// console.log(capitalize("abcdef")); // --> ['AbCdEf', 'aBcDeF'])
// console.log(capitalize("codewars")); //--> ['CoDeWaRs', 'cOdEwArS']);
