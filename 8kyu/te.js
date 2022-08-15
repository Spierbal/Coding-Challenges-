function humanYearsCatYearsDogyYears(humanYears) {
  
    const catYears = 0;
    const dogYears = 0
    
    humanYears.map(n => {
        humanYears === 1 ? catYears += 15 : dogYears += 15
        humanYears === 2 ? catYears += 9 : dogYears += 9
        humanYears !== 1 || 0 ? catYears += 4 : dogYears += 5

        return n[humanYears, catYears, dogYears]
        }) 
console.log(humanYearsCatYearsDogyYears(1))

    //    if (humanYears === 1) return catYears += 15
    //    if (humanYears === 1) return dogYears += 15
    //    if (humanYears === 2) return dogYears += 9
    //    if (humanYears === 2) return dogYears += 9
    //    else return catYears += 4
    //    else return dogYears += 5

//     const humanYears = 15;
// const humanYearsCatYearsDogYears = (humanYears) => {
//    let catYears = 0;
//    let dogYears = 0;
//    for (let i = 1; i <= humanYears; i++) {
//       if (i === 1) {
//          catYears += 15;
//          dogYears += 15;
//       }else if (i === 2) {
//          catYears += 9;
//          dogYears += 9;
//       }else {
//          catYears += 4;
//          dogYears += 5;
//       }
//    }
//    return [humanYears, catYears, dogYears];
// };
// console.log(humanYearsCatYearsDogYears(humanYears));
   
    
  
    }
  }