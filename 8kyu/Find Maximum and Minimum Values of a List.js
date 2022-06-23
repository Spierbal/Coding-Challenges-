// Solution 1:
const min = list => list.reduce((a, b) => Math.min(a, b));
const max = list => list.reduce((a, b) => Math.max(a, b));

// Solution 2:
// const min = list => Math.min(...list);
// const max = list => Math.max(...list);

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); // --> -110
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // --> 566
