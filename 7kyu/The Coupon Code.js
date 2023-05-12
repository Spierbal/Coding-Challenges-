function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    +new Date(currentDate) <= +new Date(expirationDate)
  );
}

// Solution Date Objects
/* const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  const currentDateObj = new Date(currentDate);
  const expirationDateObj = new Date(expirationDate);

  return enteredCode === correctCode && currentDateObj <= expirationDateObj;
}; */

// Solution Date.parse()
/* function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
} */

// console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); // true
// console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); // false
