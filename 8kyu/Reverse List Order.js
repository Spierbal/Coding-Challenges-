const reverseList = list => [...list].reverse();

// Solution 2:
// const reverseList = list => Array.from(list).reverse();

// Solution 3:
//const reverseList = list => list.reverse().slice();

// Solution 4: Mutates the original array
// const reverseList = list => list.reverse();

// console.log(reverseList([1, 2, 3, 4])); // --> [ 4, 3, 2, 1 ]
