const solution = str => `${str}_`.match(/\w\w/g) || [];

// Solution 1b:
// const solution = str => (s + "").match(/.{2}/g) || [];

// console.log(solution("abcdef")); // ["ab", "cd", "ef"]
// console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
// console.log(solution("")); // []
