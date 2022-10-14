const pipeFix = nums =>
  [...Array(nums[nums.length - 1] - nums[0] + 1)].map((_, i) => nums[0] + i);

// Solution 1b:
// const pipeFix = n =>
//   Array.from({ length: n[n.length - 1] - n[0] + 1 }, (_, i) => n[0] + i);

// Solution 1c:
// const pipeFix = n =>
//   Array.from({ length: n.slice(-1) - n[0] + 1 }, (_, i) => n[0] + i);

/* function pipeFix(nums) {
  let arr = [];
  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
} */

// console.log(pipeFix([6, 9])); // --> [ 6, 7, 8, 9 ]
// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
