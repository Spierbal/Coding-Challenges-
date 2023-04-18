function solve(s) {
  const upperCount = (s.match(/[A-Z]/g) || []).length;
  const lowerCount = (s.match(/[a-z]/g) || []).length;
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}

// Solution 2:
/* function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) upperCount++;
    else lowerCount++;
  }
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}
 */

/* console.log(solve("code")); // "code"
console.log(solve("CODe")); // "CODE"
console.log(solve("COde")); // "code"
console.log(solve("Code")); // "code"
 */
