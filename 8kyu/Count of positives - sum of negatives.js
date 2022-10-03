const countPositivesSumNegatives = input => {
  if (!input || input.length === 0) return [];
  const res = [0, 0];
  input.forEach(el => (el > 0 ? res[0]++ : (res[1] += el)));
  return res;
};

//Solution 1b: without ternary operator
// const countPositivesSumNegatives = input => {
//   if (!input || input.length === 0) return [];

//   let count = 0;
//   let sum = 0;

//   input.forEach(num => {
//     if (num > 0) count++;
//     if (num < 0) sum += num;
//   });
//   return [count, sum];
// }

//Solution3 :
// const countPositivesSumNegatives = input => {
//   if (!input || input.length === 0) return [];
//   let sum = 0,
//   count = 0;
//   input.map(el => (el > 0 ? count++ : (sum += el)));
//   return [count, sum];
// };

// console.log(countPositivesSumNegatives([1, 2, 3, -11, -12, -13])) // --> [3, -36]
