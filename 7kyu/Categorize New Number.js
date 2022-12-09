const openOrSenior = data =>
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// Output : ["Open", "Senior", "Open", "Senior"]
