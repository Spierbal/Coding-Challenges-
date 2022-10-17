const shortcut = str => str.replace(/[aeiou]/g, "");

// Solution 2:
//const shortcut = str => str.split(/[aeiou]/).join("");

// console.log(shortcut("hello")); // --> "hll"
// console.log(shortcut("goodbye")); // --> "gdby"
