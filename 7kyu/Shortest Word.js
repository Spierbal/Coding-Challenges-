const findShort = s => Math.min(...s.split(" ").map(word => word.length));

// Solution 2:
const findShort = s => {
  return s
    .split(" ")
    .reduce((min, word) => Math.min(min, word.length), Infinity);
};

// 34 steps
// Solution 2:
function findShort(str) {
  const arr = str.split(" ");
  let smallest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < smallest) {
      smallest = arr[i].length;
    }
  }
  return smallest;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // --> 3

// 39 steps
/* function findShort(s){
    return s
      .split(' ')
      .map(a => a.length)
      .reduce((a, b) => Math.min(a, b))
  } */

// 43 steps
// const findShort = s => s.split(" ").sort((a,b) => a.length-b.length)[0].length;

// 23 steps
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

// 22 steps
