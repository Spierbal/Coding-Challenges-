// Solution 1: for loop
function squares(x, n) {
  if (n <= 0) return [];

  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(x);
    x *= x;
  }
  return arr;
}

/* 
// Solution 2: map
function squares(x, n) 
  return n > 0 ? [...Array(n)].map((_, i) => x ** (2 ** i)) : [];
} *

/* 
// Solution 3: Array.from
const squares = (x, n) => Array.from({ length: n }, (_, i) => x ** (2 ** i));
} */

// console.log(squares(2, 5)); // [2, 4, 16, 256, 65536]
// console.log(squares(3, 3)); // [3, 9, 81]
// console.log(squares(5, 3)); // [5, 25, 625]
// console.log(squares(10, 4)); // [10, 100, 10000, 100000000]
// console.log(squares(2, 0)); // []
// console.log(squares(2, -5)); // []
