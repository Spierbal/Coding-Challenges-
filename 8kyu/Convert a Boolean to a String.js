// Solution 1:

const booleanToString = b => b.toString();

// Solution 2:

// const booleanToString = (b) => (b ? "true" : "false");

//*** clever solution:
//const booleanToString = b => b + "";

//*** Old past solution:
// function booleanToString(b){
//     if (b){
//       return "true"
//     }else{
//       return "false"
//     }
//   }

// Input = true or false
// Output= "true" or "false"

//console.log(booleanToString(true)) // --> "true"
