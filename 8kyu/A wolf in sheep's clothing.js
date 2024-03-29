// Solution 1: findIndex()
function warnTheSheep(queue) {
  const index = queue.findIndex(animal => animal === "wolf");

  return index === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - 1 - index
      }! You are about to be eaten by a wolf!`;
}

/* 
// Solution 2: indexOf()
function warnTheSheep(queue) {
  const index = queue.indexOf("wolf");
  return index === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - 1 - index
      }! You are about to be eaten by a wolf!`;
} */

/* 
// Solution 3: indexOf() and reverse()
function warnTheSheep(queue) {
  const index = [...queue].reverse().indexOf("wolf");

  return index === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
}
  */

// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // -->"Pls go away and stop eating my sheep"
// console.log(
//   warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// ); // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
