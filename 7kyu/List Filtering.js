const filter_list = l => l.filter(x => typeof x === "number");

// Solution 2:
// const filter_list = l => l.filter(x => Number(x) === x)

//console.log(filter_list([1,2,'a','b'])) // --> [1, 2]
