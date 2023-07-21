function partlist1(arr) {
  return arr.flatMap((_, i) =>
    i <= 0 ? [] : [[arr.slice(0, i).join(" "), arr.slice(i).join(" ")]]
  );
}

/* 
// Solution 1b: map() with slice()
function partlist2(arr) {
  return arr
    .map((_, i) => [arr.slice(0, i).join(" "), arr.slice(i).join(" ")])
    .slice(1);
}

/* 
// Solution 2: for loop
function partlist3(arr) {
  const res = [];

  for (let i = 1; i < arr.length; i++) {
    const part1 = arr.slice(0, i).join(" ");
    const part2 = arr.slice(i).join(" ");
    res.push([part1, part2]);
  }
  return res;
} */

/* 
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
// Output:
[
  ["I", "wish I hadn't come"],
  ["I wish", "I hadn't come"],
  ["I wish I", "hadn't come"],
  ["I wish I hadn't", "come"],
];
 */
