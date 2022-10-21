const check = (a, x) => a.includes(x);

// Solution 2:
// const check = (a, x) => a.indexOf(x) > -1;

// const check = (a, x) => a.indexOf(x) >= 0;

// const check = (a, x) => a.indexOf(x) in a

// const check = (a, x) => a.indexOf(x) !== -1

// console.log(check([66, 101], 66)); // --> true
// console.log(check(['t', 'e', 's', 't'], 'z')) --> false
