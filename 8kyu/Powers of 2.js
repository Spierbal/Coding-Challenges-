const powersOfTwo = n => [...Array(n + 1)].map((_, x) => 2 ** x);

//Solution 2:
//const powersOfTwo = n => Array.from({ length: n + 1 }, (_, i) => 2 ** i);

// console.log(powersOfTwo(1)); // --> [ 1, 2 ]
