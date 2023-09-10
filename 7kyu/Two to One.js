const mergeAndSortChars = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

/* 
// Solution 1b: (more readable)
const longest = (s1, s2) => {
  const combinedString = [...new Set(s1 + s2)]; // Combine the input strings and remove duplicates
  const sortedString = combinedString.sort(); // Sort the characters alphabetically

  return sortedString.join(""); // Convert array back to string and return
}; */

// console.log(longest("aretheyhere", "yestheyarehere")); // --> aehrsty
// console.log(longest("inmanylanguages", "theresapairoffunctions")); // --> acefghilmnoprstuy
