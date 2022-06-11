const areYouPlayingBanjo = name =>
  name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

// Solution 2:
// function areYouPlayingBanjo(name) {
//   return name[0] === "R" || name[0] === "r"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// Solution3:
// const areYouPlayingBanjo = name =>
//   name[0].toLowerCase() === 'r'
// 	? `${name} plays banjo`
// 	: `${name} does not play banjo`;

// Solution 4:
// const areYouPlayingBanjo = name =>
//   name[0].toUpperCase() == 'R'
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));
// console.log(areYouPlayingBanjo("rolf"));
