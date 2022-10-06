const multiTable = number =>
  Array.from(
    Array(10),
    (_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`
  ).join("\n");

// Solution 2:
// const multiTable = n =>
//   [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${(i + 1) * n}`).join("\n");
