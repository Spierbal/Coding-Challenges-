// Solution:

const solution = str => str.split("").reverse().join("");

// old Solution:
function solution(str) {
  reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// input => output

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
