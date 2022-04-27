function digitize(n) {
  const numString = String(n);

  return numString
    .split("")
    .reverse()
    .map(num => {
      return +num;
    });
}

// Solution 2: in one line

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// Pseudo code

// Convert the number into a string (built in string)
// and then split the number into a string e.g. split("")
// 348597 => ["3", "4", "8", "5", "9", "7"]

// then use map function to convert the array of strings into array of numbers
// ["7", "9", "5", "8", "4", "3"] => [7, 9, 5, 8, 4, 3]

// reverse the array of strings using reverse()
// Expected input = [348597] => [7, 9, 5, 8, 4, 3]

// also expected input 0 => [0]

// Finally return it
