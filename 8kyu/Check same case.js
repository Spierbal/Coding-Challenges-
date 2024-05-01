// Solution 1: Regex & toUpperCase() & toLowerCase()
const sameCase = (a, b) => {
  // Check if a and b are not letters
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1;

  // Check if a and b are both uppercase or lowercase
  if (a === a.toUpperCase() && b === b.toUpperCase()) return 1;
  if (a === a.toLowerCase() && b === b.toLowerCase()) return 1;

  // If a and b are not the same case
  return 0;
};

/* 
// Solution 1b: ternary operator 
const sameCase = (a, b) => {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1;

  return (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
    ? 1
    : 0;
}; */

/* 
// Solution 2: ascii code
const sameCase = (a, b) => {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1;

  const charA = a.charCodeAt(0);
  const charB = b.charCodeAt(0);

  // check if a & b are uppercase letters
  if (charA >= 65 && charA <= 90 && charB >= 65 && charB <= 90) return 1;
  // check if a & b are lowercase letters
  if (charA >= 97 && charA <= 122 && charB >= 97 && charB <= 122) return 1;

  return 0;
}; */

// console.log(sameCase("C", "B")); // 1
// console.log(sameCase("b", "a")); // 1
// console.log(sameCase("d", "d")); // 1
// console.log(sameCase("A", "s")); // 0
// console.log(sameCase("c", "B")); // 0
// console.log(sameCase("b", "Z")); // 0
// console.log(sameCase("\t", "Z")); // -1
// console.log(sameCase("H", ":")); // -1
