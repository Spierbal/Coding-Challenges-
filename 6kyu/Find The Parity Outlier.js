function findOutlier(int) {
  return int.slice(0, 3).filter(i => i % 2).length > 1
    ? int.find(i => !(i % 2))
    : int.find(i => i % 2);
}

// Solution 1b
/* function findOutlier(integers) {
    const even = integers.slice(0, 3).filter(i => i % 2).length > 1;
  
    return integers.find(i => (even ? !(i % 2) : i % 2));
  } */

// Solution 1c
/* const findOutlier = int =>
int.slice(0, 3).filter(even).length > 1 ? int.find(odd) : int.find(even);

const even = num => num % 2 === 0;

const odd = num => num % 2 !== 0; 
*/

// Solution 2
/* const findOutlier = int =>
  int.slice(0, 3).filter(i => i % 2).length > 1
    ? int.filter(i => !(i % 2))[0]
    : int.filter(i => i % 2)[0];
 */

// console.log(findOutlier([0, 1, 2])); // 1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0
