const getSize = (width, height, depth) => [
  2 * (depth * width + depth * height + width * height),
  width * height * depth,
];

/* console.log(getSize(4, 2, 6)); // [88, 48]);
console.log(getSize(4, 2, 6)[0]); // 88
console.log(getSize(4, 2, 6)[1]); // 48 */
