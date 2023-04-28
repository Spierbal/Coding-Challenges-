/* const fizzbuzz = n =>
  [...Array(n)].map((_, i) => {
    i++;
    if (i % 15 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return i;
  }); */

// Solution 1b: // ternary operator
/* const fizzbuzz = n =>
  [...Array(n)].map((_, i) =>
    ++i % 15 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i
  ); */

// Solution 1c:
/* const fizzbuzz3 = n =>
  [...Array(n)].map((_, i) => {
    return (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i;
  }); */

// Solution 2:
/* function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) arr.push("FizzBuzz");
    else if (i % 3 === 0) arr.push("Fizz");
    else if (i % 5 === 0) arr.push("Buzz");
    else arr.push(i);
  }
  return arr;
} */

// Solution 3:
/* function fizzbuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        result.push("FizzBuzz");
        break;
      case i % 3 === 0:
        result.push("Fizz");
        break;
      case i % 5 === 0:
        result.push("Buzz");
        break;
      default:
        result.push(i);
        break;
    }
  }
  return result;
} */

// console.log(fizzbuzz(15)); // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
