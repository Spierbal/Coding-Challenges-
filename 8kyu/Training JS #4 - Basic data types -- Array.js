const getLength = arr => arr.length;

const getFirst = arr => arr[0];

const getLast = arr => arr[arr.length - 1];

const pushElement = arr => [...arr, 4];

const popElement = arr => arr.slice(0, -1);

// Solution 2:
/* function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  arr.push(1);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
} */

// console.log(getLength([1, 2, 3])); // --> 3;
// console.log(getFirst([1, 2, 3])); // --> 1;
// console.log(getLast([1, 2, 3])); // --> 3;
// console.log(pushElement([1, 2, 3])); // --> [1, 2, 3, 4]
// console.log(popElement([1, 2, 3])); // --> [1, 2]
