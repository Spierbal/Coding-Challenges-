function peopleWithAgeDrink(age) {
  if (age < 14) return "drink toddy";
  if (age < 18) return "drink coke";
  if (age < 21) return "drink beer";

  return "drink whisky";
}

// Solution 2:
/* function peopleWithAgeDrink(age) {
  switch (true) {
    case age < 14:
      return "drink todddy";
    case age < 18:
      return "drink coke";
    case age < 21:
      return "drink beer";
    default:
      return "drink whisky";
  }
} */

// Solution 3:
/* const peopleWithAgeDrink = age =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";
 */

// console.log(peopleWithAgeDrink(18)) //"drink beer"
// console.log(peopleWithAgeDrink(8)) //"drink toddy"
// console.log(peopleWithAgeDrink(15)) // "drink coke"
// console.log(peopleWithAgeDrink(21)) // "drink whisky"
