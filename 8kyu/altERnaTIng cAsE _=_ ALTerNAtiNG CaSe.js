// Solution 1:
String.prototype.toAlternatingCase = function () {
  return [...this]
    .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
};

/* 
// Solution 2: regex
String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-z]/g, c =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );
}; */

/* 
// Solution 2b: regex
String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-z]/g, char =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
}; */

// console.log("hello world".toAlternatingCase()); // --> HELLO WORLD
// console.log("HELLO WORLD".toAlternatingCase()); // --> hello world
// console.log("hello WORLD".toAlternatingCase()); // --> HELLO world
// console.log("HeLLo WoRLD".toAlternatingCase()); // --> hEllO wOrld
