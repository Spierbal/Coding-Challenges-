const sortByLength = array => [...array].sort((a, b) => a.length - b.length);

// Solution 1b:
// const sortByLength = array => array.slice().sort((a, b) => a.length - b.length);

// console.log(sortByLength(["Beg", "Life", "I", "To"]));  // ["I", "To", "Beg", "Life"]
