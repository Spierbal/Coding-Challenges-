const isRubyComing = list => list.some(e => e.language === "Ruby");

// Solution 2: uses find
// const isRubyComing = list => list.find(e => e.language !== undefined );

/* 
// Solution 3: for loop
function isRubyComing(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Ruby") return true;
  }
  return false;
}
 */
/* 
console.log(
  isRubyComing([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
);
 */
