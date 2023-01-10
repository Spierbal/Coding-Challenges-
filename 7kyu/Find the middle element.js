function gimme(triplet) {
  const index = [...triplet].sort((a, b) => a - b);

  return triplet.indexOf(index[1]);
}

// Solution 1b:
// const gimme = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);

/* console.log(gimme([2, 3, 1])); // --> 0
console.log(gimme([5, 10, 14])); // --> 1
console.log(gimme([2.1, 3.2, 1.4])); // --> 0
console.log(gimme([5.9, 10.4, 14.2])); // --> 1
console.log(gimme([-2, -3, -1])); // --> 0
console.log(gimme([-5, -10, -14])); // --> 1
console.log(gimme([-2, -3.2, 1])); // --> 0
console.log(gimme([-5.2, -10.6, 14])); // --> 0 */
