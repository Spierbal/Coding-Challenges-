const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

//Solution 2:
//const isDivideBy = (number, a, b) => (number % a + number % b) === 0

//Solution 3:
// const isDivideBy = (number, a, b) => !(number % a || num % b)

//  console.log(isDivideBy(45, 5, 15)); // --> true
//  console.log(isDivideBy(45, 1, 6)); // --> false
