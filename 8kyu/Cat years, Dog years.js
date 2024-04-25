function humanYearsCatYearsDogYears1(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  if (humanYears === 1) {
    catYears = dogYears = 15;
  } else if (humanYears === 2) {
    catYears = dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
}

function humanYearsCatYearsDogYears2(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears >= 3) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}

function humanYearsCatYearsDogYears1(humanYears) {
  const catYears =
    humanYears < 2 ? 15 : humanYears < 3 ? 24 : 24 + (humanYears - 2) * 4;
  const dogYears =
    humanYears < 2 ? 15 : humanYears < 3 ? 24 : 24 + (humanYears - 2) * 5;

  return [humanYears, catYears, dogYears];
}

const humanYearsCatYearsDogYears3 = humanYears => {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];

  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

const humanYearsCatYearsDogYears4 = humanYears => {
  switch (humanYears) {
    case 1:
      return [1, 15, 15];
    case 2:
      return [2, 24, 24];
  }
  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

const humanYearsCatYearsDogYears5 = h => {
  const c = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 4;
  const d = h === 1 ? 15 : h === 2 ? 24 : 24 + (h - 2) * 5;
  return [h, c, d];
};

console.log(humanYearsCatYearsDogYears(1)); // --> [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)); // --> [2, 24, 24]
console.log(humanYearsCatYearsDogYears(3)); // --> [3, 28, 29]
console.log(humanYearsCatYearsDogYears(4)); // --> [4, 32, 34]
console.log(humanYearsCatYearsDogYears(5)); // --> [5, 36, 39]
console.log(humanYearsCatYearsDogYears(10)); // --> [10, 56, 64]
