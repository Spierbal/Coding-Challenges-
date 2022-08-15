function humanYearsCatYearsDogYears(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  for (let i = 0; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (i > 2) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
