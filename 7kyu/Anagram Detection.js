function isAnagram(test, original) {
  return cleanString(test) === cleanString(original);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

//   console.log(isAnagram("foefet", "toffee")) // --> true, 'The word foefet is an anagram of toffee'
//   console.log(isAnagram("Buckethead", "DeathCubeK")) // --> true, 'The word Buckethead is an anagram of DeathCubeK'
//   console.log(isAnagram("apple", "pale")) // --> false, 'Same letters, but different count'
//   console.log(isAnagram("dumble", "bumble")) // --> false, 'Characters do not match for test case dumble, bumble'
