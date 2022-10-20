const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

// Shorter Solution 2:
// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

//Longer Solution 3:
// function bonusTime(salary, bonus) {
//     if (bonus) return `£${salary * 10}`
//     return `£${salary}`
//   }

//console.log(bonusTime(100, true)); // --> "£1000"
//console.log(bonusTime(100, false)); // --> "£100"
