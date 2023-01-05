const solution = nums => (nums ? [...nums].sort((a, b) => a - b) : []);

// Solution 1b:
// const solution = nums => [...(nums || [])].sort((a, b) => a - b);

// Solution 1c:
// function solution(nums) {
//   if (!nums) return [];

//   return [...nums].sort((a, b) => a - b);
// }

/* console.log(solution([1, 2, 3, 10, 5])); // [1,2,3,5,10]
console.log(solution([20, 2, 10])); //  [2,10,20]
console.log(solution([])); //  []
console.log(solution(null)); //  []
 */
