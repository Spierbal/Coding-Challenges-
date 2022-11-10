function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

// Solution 2:
/* const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

const getDrinkByProfession = param => drinks[param.toLowerCase()] || "Beer"; */

// Solution 3:
/* function getDrinkByProfession(param) {
  let res = param.toLowerCase();
  return res === "jabroni"
    ? "Patron Tequila"
    : res === "school counselor"
    ? "Anything with Alcohol"
    : res === "programmer"
    ? "Hipster Craft Beer"
    : res === "bike gang member"
    ? "Moonshine"
    : res === "politician"
    ? "Your tax dollars"
    : res === "rapper"
    ? "Cristal"
    : "Beer";
} */

// console.log(getDrinkByProfession("jabrOni")); // --> "Patron Tequila"
// console.log(getDrinkByProfession("scHOOl counselor")); // "Anything with Alcohol"
// console.log(getDrinkByProfession("prOgramMer")); // --> "Hipster Craft Beer"
// console.log(getDrinkByProfession("bike ganG member")); // --> "Moonshine"
// console.log(getDrinkByProfession("poLiTiCian")); // --> "Your tax dollars"
// console.log(getDrinkByProfession("rapper")); // --> "Cristal", "'Rapper'
// console.log(getDrinkByProfession("pundit")); // --> "Beer"
// console.log(getDrinkByProfession("Pug")); // --> "Beer"
