const arrayDiff = (a, b) => a.filter(x => !new Set(b).has(x));

// Solution 2:
//const arrayDiff = (a, b) => a.filter(x => !b.includes(x));

// Solution 3:
//const arrayDiff = (a, b) => a.filter(x => b.indexOf(x) === -1);

// Solution 4:
/* function arrayDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
} */

//console.log(arrayDiff([1, 2], [1])); // --> [2]
//console.log(arrayDiff([1, 2, 2], [1])); // --> [2,2]
//console.log(arrayDiff([1, 2, 3], [1, 2])); // --> [3]
