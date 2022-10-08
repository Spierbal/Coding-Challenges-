const mouthSize = animal =>
  animal.toLowerCase() === "alligator" ? "small" : "wide";

// console.log(mouthSize("toucan")); // --> "wide"
// console.log(mouthSize("ant bear")); // --> "wide"
// console.log(mouthSize("alligator")); // --> "small"
// console.log(mouthSize("ALLIGATOR")); // --> "small"
