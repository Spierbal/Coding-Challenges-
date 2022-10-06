function weatherInfo(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return celsius > 0
    ? `${celsius} is above freezing temperature`
    : `${celsius} is freezing temperature`;
}

// Solution 2:
/* function weatherInfo(temp) {
    const c = convertToCelsius(temp);
    if (c <= 0) return c + " is freezing temperature";
    else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
    const celsius = (temperature - 32) * (5 / 9);
    return celsius;
} */

// console.log(weatherInfo(50)); //--> 10 is above freezing temperature
// console.log(weatherInfo(23)); // --> -5 is freezing temperature
