function evaporator(content, evap_per_day, threshold) {
  let currContent = content;
  const thresholdContent = (threshold / 100) * content;
  let days = 0;

  while (currContent > thresholdContent) {
    currContent -= (evap_per_day / 100) * currContent;
    days++;
  }
  return days;
}

// Solution 1b: for loop
/* function evaporator(content, evap_per_day, threshold) {
  let currContent = content;
  const thresholdContent = (threshold / 100) * content;
  let days;

  for (days = 0; currContent > thresholdContent; days++) {
    currContent -= (evap_per_day / 100) * currContent;
  }
  return days;
} */

// console.log(evaporator(10, 10, 10)); // 22
