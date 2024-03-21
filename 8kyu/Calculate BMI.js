// Solution 1: if else statements
function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25) return "Normal";
  if (bmi <= 30) return "Overweight";

  return "Obese";
}

/* 
// Solution 2: switch statement
function bmi(weight, height) {
  const bmi = weight / (height * height);

  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25:
      return "Normal";
    case bmi <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
} */

/* 
// Solution 3: ternary operator
function bmi(weight, height) {
  const bmi = weight / height ** 2;

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
} */

console.log(bmi(80, 1.8)); // --> "Normal"
