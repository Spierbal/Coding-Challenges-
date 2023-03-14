function isValidWalk(walk) {
  let [n, s, e, w] = [[], [], [], []];

  walk.map(v => {
    v === "n"
      ? (n = [...n, 1])
      : v === "s"
      ? (s = [...s, 1])
      : v === "e"
      ? (e = [...e, 1])
      : (w = [...w, 1]);
  });

  return n.length === s.length && w.length === e.length && walk.length === 10;
}

// Solution 2:
/* function isValidWalk(walk) {
  let obj = { n: 0, s: 0, e: 0, w: 0 };
  walk.forEach(dir => obj[dir]++);
  return walk.length === 10 && obj.n === obj.s && obj.e === obj.w;
} */

// Solution 3:
/* const count = (walk, dir) => walk.filter(d => d === dir).length

const isValidWalk = walk =>
  walk.length === 10 &&
  count(walk, 'n') === count(walk, 's') &&
  count(walk, 'w') === count(walk, 'e') */

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // 'should return true'
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// ); // 'should return false';
// console.log(isValidWalk(["w"])); //, 'should return false')
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); //  'should return false'
