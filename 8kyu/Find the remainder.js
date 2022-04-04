// function remainder(a, b){
//     if (a > b && b === 0){
//       return NaN;
//      } else if (b > a === 0){
//       return NaN;
//      }else if (a > b){
//        return a % b;
//      }else{
//        return b % a;
//      }
//     }

//   function remainder(a, b){
//     if ( a > b && b === 0 || b < a && a === 0){
//       return NaN
//       }else{
//         return a > b ? a % b : b % a
//       }
//   }

//   function remainder(n, m){
//     if((n>m && m===0) || (m>n && n===0)) {
//       return NaN;
//     } else {
//       return n>m ? n%m : m%n
//     }
//   }

//   function remainder(a, b){
//     if (a > b && b === 0){
//       return NaN;
//      } else if (b > a === 0){
//   }
//    return a > b ? a % b : b % a
//   }

//   function remainder(a, b){
//     return a < b ? b%a :a%b;
//   }

const remainder = (a, b) => (a > b ? a % b : b % a);

//   const remainder = (a, b) => Math.max(a,b) % Math.min(a,b);
