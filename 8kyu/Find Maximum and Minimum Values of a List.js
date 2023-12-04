// Solution 1: Math.min/Math.max
const min = list => Math.min(...list);
const max = list => Math.max(...list);

/* 
// Solution 2: reduce
const min = list => list.reduce((a, b) => Math.min(a, b));
const max = list => list.reduce((a, b) => Math.max(a, b)); 
*/

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); // --> -110
// console.log(min([42, 54, 65, 87, 0])); // --> 0
// console.log(min([1, 2, 3, 4, 5, 10])); // --> 1
// console.log(min([-1, -2, -3, -4, -5, -10])); // --> -10

// console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // --> 566
// console.log(max([-52, 56, 30, 29, -54, 0, -110])); //  -->56
// console.log(max([5])); // --> 5
// console.log(max([534, 43, 2, 1, 3, 4, 5, 5, 443, 443, 555, 555])); //  --> 555
