function well(x) {
  const goodIdeas = x.filter(idea => idea === "good").length;
  return goodIdeas > 2
    ? "I smell a series!"
    : goodIdeas > 0
    ? "Publish!"
    : "Fail!";
}

//console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // --> "Publish"
