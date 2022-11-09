const distinct = a => [...new Set(a)];

// Solution 2:
//const distinct = a => Array.from(new Set(a))

// Solution 3:
// const distinct = a => a.filter((el, idx) => a.indexOf(el) === idx)

// console.log(distinct([1, 1, 2])); // --> [1, 2]
