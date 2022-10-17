function warnTheSheep(queue) {
  let index = [...queue].reverse().indexOf("wolf");
  return index
    ? `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
}

// Solution 2: Same as above but modifies the array
/* function warnTheSheep(queue) {
  let reverse = queue.reverse();
  let index = reverse.indexOf("wolf");
  if (index) {
    return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
  }
  return "Pls go away and stop eating my sheep";
} */

// Solution 3:
/* function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    let index = queue.indexOf("wolf");
    return `Oi! Sheep number ${
      queue.length - index - 1
    }! You are about to be eaten by a wolf!`;
  }
} */

// Solution 3: FindIndex()
/* function warnTheSheep(queue) {
    let reverseArr = queue.reverse();
    let index = queue.findIndex(el => el === "wolf");
    if (index) return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;

    return "Pls go away and stop eating my sheep";
  }
 */

// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // -->"Pls go away and stop eating my sheep"
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
