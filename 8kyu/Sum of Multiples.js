// function sumMul(n,m){
//     if (n > m || n <= 0|| m <= 0 ) return "INVALID";  //Step 2

//     // make a total
//     let total = 0;   // Step 1

//     //make a loop,
//     for (let i = n; i < m; i+=n){
//     // in every iteration get a multiple of n
//     // add it to the total
//     total += i;
//
//     }

//     //return total
//     return total;
//     }

function sumMul(n, m) {
  if (n > m || n <= 0 || m <= 0) return "INVALID";

  let total = 0;

  for (let i = n; i < m; i += n) {
    total += i;
  }
  return total;
}
