const arr = N => Array.from(Array(N), (_, i) => i);

// Solution 2:
// const arr = N => (N ? [...Array(N)].map((_, i) => i) : []);

// Solution 3: same as solution 1 but includes ternary operator
// const arr = N => (N ? Array.from({ length: N }, (_, i) => i) : []);

// console.log(arr(4)); // --> [ 0, 1, 2, 3, 4 ]
