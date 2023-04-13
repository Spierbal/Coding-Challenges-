function calculateAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  switch (true) {
    case age === 0:
      return "You were born this very year!";
    case age === 1:
      return "You are 1 year old.";
    case age < 0:
      return `You will be born in ${-age} years.`;
    default:
      return `You are ${age} years old.`;
  }
}

// Solution 2:
// function calculateAge(birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   if (age === 0) return "You were born this very year!";
//   if (age === 1) return "You are 1 year old.";
//   if (age === -1) return "You will be born in 1 year.";
//   return age > 0
//     ? `You are ${age} years old.`
//     : `You will be born in ${-age} years.`;
// }

// console.log(calculateAge(3400, 3400)); // You were born this very year!
// console.log(calculateAge(2021, 2022)); // You are 1 year old.
// console.log(calculateAge(1971, 2022)); // You are 51 years old.
// console.log(calculateAge(2012, 2016)); // You are 4 years old.
// console.log(calculateAge(1989, 2016)); // You are 27 years old.
// console.log(calculateAge(2000, 2090)); // You are 90 years old.
// console.log(calculateAge(900, 2900)); // You are 2000 years old.
// console.log(calculateAge(2000, 1990)); // You will be born in 10 years.
// console.log(calculateAge(2010, 1990)); // You will be born in 20 years.
// console.log(calculateAge(2010, 1500)); // You will be born in 510 years.
// console.log(calculateAge(2000, 1999)); // You will be born in 1 year.
