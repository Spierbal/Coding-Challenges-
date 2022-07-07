const feast = (beast, dish) =>
  beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);

//Solution 2:
// const feast = (beast, dish) =>
//   beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

//console.log(feast("great blue heron", "garlic naan")); // --> true (ggnn)
//console.log(feast("chickadee", "chocolate cake")); // --> true (ccee)
//console.log(feast("brown bear", "bear claw")); // --> false (bbrw)
