const sayHello = (name, city, state) =>
  `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

// Solution 2:
/* const sayHello = (name, city, state) =>
  "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state + "!"; */

// console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona")); // --> 'Hello, John Smith! Welcome to Phoenix, Arizona!'
