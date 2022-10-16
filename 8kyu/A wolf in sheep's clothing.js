// Solution 2:
/* function warnTheSheep(queue) {
    let reverseArr = queue.reverse();
    let index = queue.findIndex(el => el === "wolf");
    if (index) return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
  
    return "Pls go away and stop eating my sheep";
  } */

console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
