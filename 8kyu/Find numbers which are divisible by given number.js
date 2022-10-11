const divisibleBy = (n, divisor) => n.filter(num => num % divisor === 0);

//Solution 2:
/* function divisibleBy(n, divisor) {
  let newArr = [];
  n.map(x => {
    if (x % divisor === 0) newArr.push(x);
  });
  return newArr;
} */

//Solution 3:
/* function divisibleBy(n, divisor) {
  let newArr = [];
  
  for (let i = 0; i < n.length; i++) {
      if (n[i] % divisor === 0) newArr.push(n[i]);
    }
  return newArr;
} */

//console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); // --> [ 2, 4, 6 ]
