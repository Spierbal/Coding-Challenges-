// Solution 1: filter() and .length
function countDevelopers(list) {
  return list.filter(
    dev => dev.continent === "Europe" && dev.language === "JavaScript"
  ).length;
}

/* 
// Solution 2: reduce()
function countDevelopers2(list) {
  return list.reduce(
    (count, dev) =>
      count + (dev.continent === "Europe" && dev.language === "JavaScript"),
    0
  );
}
 */
/* 
// Solution 3: for loop
function countDevelopers(list) {
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
      count++;
    }
  }
  return count;
} */

/* 
// Solution 3b: for of loop
function countDevelopers(list) {
  let count = 0;

  for (const { continent, language } of list) {
    if (continent === "Europe" && language === "JavaScript") count++;
  }
  return count;
}
 */

/* const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
]; */

// console.log(countDevelopers(list1)); //, 1, "Noah is the only JavaScript developer from Europe");
