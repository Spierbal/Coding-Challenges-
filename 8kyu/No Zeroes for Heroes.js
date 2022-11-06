const noBoringZeros = n => +`${n}`.replace(/0+$/, "");

// Solution 1b:
// const noBoringZeros = n => Number(`${n}`.replace(/0+$/, ""));

// Solution 1c:
// const noBoringZeros = n => Number(String(n).replace(/0+$/g, ""));

// Solution 2:
// const noBoringZeros = n => !n || n % 10 ? n : noBoringZeros(n / 10)

// Solution 2b:
// const noBoringZeros = n => (n % 10 || n === 0 ? n : noBoringZeros(n / 10));

// Solution 3:
/* function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n /= 10;
  }
  return n;
} */

// console.log(noBoringZeros(14500)); // 145
// console.log(noBoringZeros(-500)); // -5
