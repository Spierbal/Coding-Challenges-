const addLength = str => str.split(" ").map(w => `${w} ${w.length}`);

// console.log(addLength("apple ban")); // --> ["apple 5", "ban 3"]);
