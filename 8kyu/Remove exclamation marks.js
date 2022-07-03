const removeExclamationMarks = s => s.replace(/!/g, "");

//Solution 2:
//const  removeExclamationMarks = s => [...s].filter(el => el !== "!").join("");

//Solution 3:
//const removeExclamationMarks = (s) => s.split("!").join("")

//console.log(removeExclamationMarks("Hello World!!!!!")) // --> "Hello World"
