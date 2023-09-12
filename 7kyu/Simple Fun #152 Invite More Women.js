// Solution 1: reduce
const inviteMoreWomen = L => L.reduce((total, gender) => total + gender, 0) > 0;

/* 
// Solution 2: for loop
function inviteMoreWomen(L) {
  let total = 0;
  for (const gender of L) {
    total += gender;
  }
  return total > 0;
} */

// console.log(inviteMoreWomen([1, -1, 1])); //true
// console.log(inviteMoreWomen([1, 1, 1])); //true
// console.log(inviteMoreWomen([-1, -1, -1])); //false
// console.log(inviteMoreWomen([1, -1])); //false
