const fixTheMeerkat = arr => arr.reverse();

//Recommended - Solution 2: Same as Solution 1 but without mutating the original array
// const fixTheMeerkat = arr => [...arr].reverse();

// Solution 3: Does not mutate the original array
// const fixTheMeerkat = arr => Array.from(arr).reverse();

// Solution 4: Does not mutate the original array
// const fixTheMeerkat = arr => arr.slice().reverse();

// console.log(fixTheMeerkat([tail, body, head])); // --> ["head", "body", "tail"]
