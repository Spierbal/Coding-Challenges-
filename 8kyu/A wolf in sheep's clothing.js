function warnTheSheep(queue) {
  let index = [...queue].reverse().indexOf("wolf");
  return index
    ? `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
}

/* 
// Solution 2: 
function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf('wolf');
  const sheepIndex = queue.length - wolfIndex - 1;

  if (wolfIndex === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
  } else {
      return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
  }
} */

// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // -->"Pls go away and stop eating my sheep"
// console.log(
//   warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// ); // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
