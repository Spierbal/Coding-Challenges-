const findNeedle = haystack =>
  `found the needle at position ${haystack.findIndex(
    needles => needles === "needle"
  )}`;

// Solution 2: Shorter Solution

/* const findNeedle = haystack =>
  `found the needle at position ${haystack.indexOf("needle")}`; */
