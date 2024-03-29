const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];
const howMuchILoveYou = n => phrases[(n - 1) % 6];

// solution 2:
// function howMuchILoveYou(nbPetals) {
//   const phrases = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];
//   return phrases[(nbPetals - 1) % 6];
// }

// console.log(howMuchILoveYou(8)); // --> "a little"
// console.log(howMuchILoveYou(3)); // --> "a lot"
