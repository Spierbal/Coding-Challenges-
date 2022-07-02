const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

// Solution2 :
//const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

// console.log(greet('Daniel', 'Daniel')) // --> Hello boss
// console.log(greet('Greg', 'Daniel')) // --> Hello guest
