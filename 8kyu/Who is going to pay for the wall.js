const whoIsPaying = name =>
  name.length <= 2 ? [name] : [name, name.slice(0, 2)];

// console.log(whoIsPaying("Mexico")); // ["Mexico", "Me"]
// console.log(whoIsPaying("Melania")); // ["Melania", "Me"]
// console.log(whoIsPaying("Melissa")); // ["Melissa", "Me"]
// console.log(whoIsPaying("Me")); // ["Me"]
// console.log(whoIsPaying("I")); // ["I"]
// console.log(whoIsPaying("")); // [""]
