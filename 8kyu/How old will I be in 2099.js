function calculateAge(birthYear, currentYear) {
  const age = currentYear - birthYear;

  if (currentYear === birthYear) {
    return "You were born this very year!";
  } else if (currentYear === birthYear + 1) {
    return `You are ${age} year old.`;
  } else if (currentYear > birthYear) {
    return `You are ${age} years old.`;
  } else if (currentYear + 1 === birthYear) {
    return `You will be born in ${-age} year.`;
  } else if (currentYear < birthYear) {
    return `You will be born in ${-age} years.`;
  }
}

//console.log(calculateAge(1971, 2022)) --> You are 51 years old

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
