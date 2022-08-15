const powersOfTwo = n => [...Array(n + 1)].map((_, i) => 2 ** i);

// Solution 2:
//const powersOfTwo = n => [...Array(n + 1)].map((_, i) => Math.pow(2, i));

//Solution 3:
//const powersOfTwo = n => Array.from({ length: n + 1 }, (_, i) => 2 ** i);

// console.log(powersOfTwo(1)); // --> [ 1, 2 ]
