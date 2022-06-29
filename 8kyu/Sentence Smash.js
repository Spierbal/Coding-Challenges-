const smash = words => words.join(" ");

// solution 2:
// const smash = words =>
//   words.length === 0 ? "" : words.reduce((x, y) => (x += ` ${y}`));

//console.log(smash(["this", "is", "a", "sentence"])); // --> "this is a sentence"
