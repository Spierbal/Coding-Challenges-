function cookie(x) {
  if (typeof x === "string") return "Who ate the last cookie? It was Zach!";
  if (typeof x === "number") return "Who ate the last cookie? It was Monica!";

  return "Who ate the last cookie? It was the dog!";
}

// Solution 2:
/* function cookie(x) {
  return `Who ate the last cookie? It was ${
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog"
  }!`;
} */

// console.log(cookie("Ryan")); //"Who ate the last cookie? It was Zach!"
// console.log(cookie(26)); // "Who ate the last cookie? It was Monica!"
// console.log(cookie(2.3)); //"Who ate the last cookie? It was Monica!"
// console.log(cookie(true)); //"Who ate the last cookie? It was the dog!"
