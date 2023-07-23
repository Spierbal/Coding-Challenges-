function evaporator(content, evap_per_day, threshold) {
  let currContent = content;
  const thresholdContent = (threshold / 100) * content;
  let numberOfDays = 0;

  while (currContent > thresholdContent) {
    currContent -= (evap_per_day / 100) * currContent;
    numberOfDays++;
  }
  return numberOfDays;
}

// Solution 1b: for loop
/* function evaporator(content, evap_per_day, threshold) {
  let currContent = content;
  const remainingContent = (threshold / 100) * content;
  let days;

  for (days = 0; currContent > remainingContent; days++) {
    currContent -= (evap_per_day / 100) * currContent;
  }
  return days;
} */

// console.log(evaporator(10, 10, 10)); // 22
