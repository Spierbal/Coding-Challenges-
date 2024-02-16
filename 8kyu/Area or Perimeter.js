// Solution 1: ternary operator
const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

/* 
// Solution 2: if else statement
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else if (l !== w) {
    return 2 * (l + w);
  }
}; */

// console.log(areaOrPerimeter(4, 4)); // --16
// console.log(areaOrPerimeter(6, 10)); // --> 32]]
