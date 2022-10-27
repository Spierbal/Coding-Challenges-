const capitalize = s => [alternateCase(s), alternateUpperCase(s)];

function alternateCase(s) {
  return [...s].map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c)).join("");
}

function alternateUpperCase(s) {
  return [...s].map((c, i) => (i % 2 !== 0 ? c.toUpperCase() : c)).join("");
}
// Solution 2
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

// Solution 3:
/* function capitalize(s) {
  let a = "";
  let b = "";

  for (let i = 0; i < s.length; ++i) {
    if (i % 2 === 0) {
      a += s[i].toUpperCase();
      b += s[i];
    } else {
      a += s[i];
      b += s[i].toUpperCase();
    }
  }
  return [a, b];
} */

// solution 4: clever
function capitalize(s) {
  return [0, 1].map(b =>
    [...s].map((c, i) => (i % 2 === b ? c.toUpperCase() : c)).join("")
  );
}

// console.log(capitalize("abcdef")); // --> ['AbCdEf', 'aBcDeF'])
// console.log(capitalize("codewars")) //-->['CoDeWaRs', 'cOdEwArS']);
