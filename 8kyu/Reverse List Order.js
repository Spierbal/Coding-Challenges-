const reverseList = list => [...list].reverse();

/* 
// Solution 2:
const reverseList = list => list.slice().reverse()
*/

/* 
// Solution 3: for loop
function reverseList(list) {
  const reversed= [];
  for (let i = list.length-1; i >= 0; i --){
    reversed.push(list[i]);
  }
  return reversed;
} */

/* 
// Solution 4: reduce()
function reverseList(list) {
  return list.reduce((reversed, item) => [item, ...reversed], []);
} */

/* 
// Solution 4: Mutates the original array
const reverseList = list => list.reverse();
*/

// console.log(reverseList([1, 2, 3, 4])); // --> [ 4, 3, 2, 1 ]
