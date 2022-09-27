const areYouPlayingBanjo = name =>
  name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

// Solution 2:
// const areYouPlayingBanjo = name =>
//   name.startsWith("R") || name.startsWith("r")
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;

// console.log(areYouPlayingBanjo("Adam")); // --> "Adam does not play banjo'"
// console.log(areYouPlayingBanjo("Ringo")); // --> "Ringo plays banjo"
// console.log(areYouPlayingBanjo("rolf")); // --> "rolf plays banjo"
