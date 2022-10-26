function isAnagram(test, original) {
  return cleanString(test) === cleanString(original);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// Solution 1b:
/* const isAnagram = (test, original) => {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
}; */

// Solution 3:
/* function isAnagram(test, original) {
  const charMapA = buildCharMap(test);
  const charMapB = buildCharMap(original);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
} */

//   console.log(isAnagram("foefet", "toffee")) // --> true, 'The word foefet is an anagram of toffee'
//   console.log(isAnagram("Buckethead", "DeathCubeK")) // --> true, 'The word Buckethead is an anagram of DeathCubeK'
//   console.log(isAnagram("apple", "pale")) // --> false, 'Same letters, but different count'
//   console.log(isAnagram("dumble", "bumble")) // --> false, 'Characters do not match for test case dumble, bumble'
