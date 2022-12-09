const filter_list = l => l.filter(x => typeof x !== "string");

//const filter_list = l => l.filter(x => typeof x === "number");

// Solution 1b:
// const filter_list = l => l.filter(x => Number(x) === x)

// Solution 1c
// const filter_list = l => l.filter(Number.isInteger);

// Solution 3: For Of Loop
/* function filter_list(l) {
  let res = [];

  for (let item of l) {
    if (typeof item === "number") {
      res.push(item);
    }
  }
  return res;
} */

// Solution 3b:
/* function filter_list(l) {
  let res = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      res.push(l[i]);
    }
  }
  return res;
} */

//console.log(filter_list([1,2,'a','b'])) // --> [1, 2]
