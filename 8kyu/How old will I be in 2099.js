// function calculateAge(birthYear, currentYear) {
//   const age = currentYear - birthYear;

//   if (currentYear === birthYear) {
//     return "You were born this very year!";
//   } else if (currentYear === birthYear + 1) {
//     return `You are ${age} year old.`;
//   } else if (currentYear > birthYear) {
//     return `You are ${age} years old.`;
//   } else if (currentYear + 1 === birthYear) {
//     return `You will be born in ${-age} year.`;
//   } else if (currentYear < birthYear) {
//     return `You will be born in ${-age} years.`;
//   }
// }

//** solution 2: *//

// function calculateAge(birthYear, currentYear) {
//     const age = currentYear - birthYear;

//     if (age === 1) {
//       return "You are 1 year old.";
//     } else if (age === -1) {
//       return "You will be born in 1 year.";
//     } else if (age > 0) {
//       return `You are ${age} years old.`;
//     } else if (age < 0) {
//       return `You will be born in ${-age} years.`;
//     } else {
//       return "You were born this very year!";
//     }
//    }

//***  Very clever solution 3: *//

// function calculateAge(a, b) {
//   if (a === b) return "You were born this very year!";
//   let years = a - b === 1 || b - a === 1 ? "year" : "years";
//   if (a < b) return `You are ${b - a} ${years} old.`;
//   if (a > b) return `You will be born in ${a - b} ${years}.`;
// }

// **Clever solution 4: *//
// const calculateAge = (birthYear, currentYear) => {
//   if (birthYear === currentYear) {
//     return "You were born this very year!";
//   } else if (birthYear > currentYear) {
//     return currentYear - birthYear === 1
//       ? "You are 1 year old."
//       : `You are ${currentYear - birthYear} years old.`;
//   } else {
//     return birthYear - currentYear === 1
//       ? "You will be born in 1 year."
//       : `You will be born in ${birthYear - currentYear} years.`;
//   }
// };
