const remove = str => (str[str.length - 1] === "!" ? str.slice(0, -1) : str);

// Solution 2:
// const remove = str => (str.endsWith("!") ? str.slice(0, -1) : str);

// Solution 3:
// const remove = str => str.replace(/!$/g, "");

// console.log(remove("Hi!")); // --> "Hi"
// console.log(remove("Hi!!!")); // --> "Hi!!"
