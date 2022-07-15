function createPhoneNumber(numbers) {
  const match = numbers.join("").match(/^(\d{3})(\d{3})(\d{4})$/);
  return `(${match[1]}) ${match[2]}-${match[3]}`;
}

//solution 2:
// const createPhoneNumber = numbers =>
//   numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

//Solution 3:
// function createPhoneNumber(numbers) {
//   const num = numbers.join("");
//   return `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`;
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // --> (123) 456-7890
