const toCamelCase = str =>
  str.replace(/[-_](\w)/g, (_, char) => char.toUpperCase());

// console.log(toCamelCase("")); // ""
// console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
// console.log(toCamelCase("A-B-C")); // "ABC"
