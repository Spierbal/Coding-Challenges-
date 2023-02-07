const remove = string => `${string.replace(/!+/g, "")}!`;

/* console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi!!!")); // "Hi!"
console.log(remove("!Hi")); // "Hi!"
console.log(remove("!Hi!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi!"
console.log(remove("Hi")); // "Hi!"

 */
