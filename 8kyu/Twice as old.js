const twiceAsOld = (dadAge, sonAge) => Math.abs(dadAge - sonAge * 2);

//Solution2:
// function twiceAsOld(dadAge, sonAge) {
//   return dadAge - sonAge * 2 < 0
//     ? dadAge - sonAge * 2 * -1
//     : dadAge - sonAge * 2;
// }

console.log(twiceAsOld(36, 7)); // --> 22
