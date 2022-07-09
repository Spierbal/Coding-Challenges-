function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

// const getGrade = (...scores) => {
//   const average = scores.reduce((a, b) => a + b) / scores.length;
//   switch (true) {
//     case average < 60:
//       return "F";
//     case average < 70:
//       return "D";
//     case average < 80:
//       return "C";
//     case average < 90:
//       return "B";
//     case average > 90:
//       return "A";
//   }
// };

// function getGrade(s1, s2, s3) {
//   const avg = (s1 + s2 + s3) / 3;
//   return avg >= 90
//     ? "A"
//     : avg >= 80
//     ? "B"
//     : avg >= 70
//     ? "C"
//     : avg >= 60
//     ? "D"
//     : "F";
// }

//console.log(getGrade(90,90,91)) // --> "A"
//console.log(getGrade(89,88,86)) // --> "B"
//console.log(getGrade(70,70,71)) // --> "C"
//console.log(getGrade(60,61,62)) // --> "D"
//console.log(getGrade(50,51,51)) // --> "F"
