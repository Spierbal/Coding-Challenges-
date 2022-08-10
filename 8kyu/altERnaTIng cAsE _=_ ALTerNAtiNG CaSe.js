String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-z]/g, char =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
};

//  console.log("hello world".toAlternatingCase()) // --> HELLO WORLD
//  console.log("HELLO WORLD".toAlternatingCase()) // --> hello world
//  console.log("hello WORLD".toAlternatingCase()) // --> HELLO world
//  console.log("HeLLo WoRLD".toAlternatingCase()) // --> hEllO wOrld
