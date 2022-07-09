const updateLight = current =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

//Solution 2:

//   function updateLight(current) {
//     if (current === "green") return "yellow"
//     if (current === "yellow") return "red"
//     return "green"
//    }

// console.log(updateLight("green")); // --> yellow
// console.log(updateLight("yellow")); // --> red
// console.log(updateLight("red")); // --> green
