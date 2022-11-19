const animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// Solution 1b: destructuring
/* const animal = ({ name, legs, color }) =>
  `This ${color} ${name} has ${legs} legs.`; */

// Solution 1c:
/* function animal(obj) {
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
} */

// console.log(animal({ name: "dog", legs: 4, color: "white" })); // "This white dog has 4 legs."
