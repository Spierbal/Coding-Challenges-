const well = x => {
  const goodIdeas = x.filter(idea => idea === "good").length;

  if (goodIdeas > 2) return "I smell a series!";
  if (goodIdeas > 0) return "Publish!";

  return "Fail!";
};

// Solution 2: Nested Ternary Operator
// function well(x) {
//   const goodIdeas = x.filter(idea => idea === "good").length;

//   return goodIdeas > 2
//     ? "I smell a series!"
//     : goodIdeas > 0
//     ? "Publish!"
//     : "Fail!";
// }

// Solution 3: Switch Statement
function well(x) {
  const goodIdeas = x.filter(idea => idea === "good").length;
  return goodIdeas > 2
    ? "I smell a series!"
    : goodIdeas > 0
    ? "Publish!"
    : "Fail!";
}

//console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // --> "Publish"
