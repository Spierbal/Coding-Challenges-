const openOrSenior = data =>
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));

// Solution 1b:
/* const openOrSenior2 = data =>
  data.map(member => member[0] > (54 && member[2] ? "Senior" : "Open")); */

// Solution 2: forEach
/* function openOrSenior(data) {
  const result = [];
  data.forEach(member => {
    if (member[0] > 54 && member[1] > 7) result.push("Senior");
    else result.push("Open");
  });
  return result;
} */

// Solution 3: For of loop
/* function openOrSenior(data) {
  const res = [];

  for (const member of data) {
    const [age, handicap] = member;
    if (age > 54 && handicap > 7) res.push("Senior");
    else res.push("Open");
  }
  return res;
} */

// console.log(openOrSenior([[45, 12],[55, 21],[19, -2],[104, 20]]));
// Output : ["Open", "Senior", "Open", "Senior"]
