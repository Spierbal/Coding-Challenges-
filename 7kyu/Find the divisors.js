function divisors(integer) {
  const divisor = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divisor.push(i);
  }
  return divisor.length > 0 ? divisor : `${integer} is prime`;
}

// Solution 2:
/* function divisors(int) {
  const arr = [...Array(int - 2)]
    .map((_, i) => i + 2)
    .filter(el => int % el === 0);

  return arr.length > 0 ? arr : `${int} is prime`;
} */

/* console.log(divisors(15)); // -->  [3, 5];
console.log(divisors(12)); // --> [2, 3, 4, 6];
console.log(divisors(13)); // --> "13 is prime"
console.log(divisors(25)); // --> "[5]" */
