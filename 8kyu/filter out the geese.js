const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const gooseFilter = birds => birds.filter(bird => !geese.includes(bird));

// Solution 2:
// function gooseFilter(birds) {
//   const geese = [
//     "African",
//     "Roman Tufted",
//     "Toulouse",
//     "Pilgrim",
//     "Steinbacher",
//   ];

//   return birds.filter(bird => !geese.includes(bird));
// }

//console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])) --> []
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) // --> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
