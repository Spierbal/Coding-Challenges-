// Solution 1: find
const getFirstPython = list => {
  const dev = list.find(({ language }) => language === "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
};

/* 
// Solution 2: findIndex
function getFirstPython(list) {
  const index = list.findIndex(({ language }) => language === "Python");
  return index !== -1
    ? `${list[index].firstName}, ${list[index].country}`
    : "There will be no Python developers";
} */

/* 
// Solution 3: for of loop
function getFirstPython(list) {
  for (const dev of list) {
    if (dev.language === "Python") return `${dev.firstName}, ${dev.country}`;
  }
  return "There will be no Python developers";
} */

/* 
const list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
]; */

/* 
const list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
]; */

// console.log(getFirstPython(list1)); // "Victoria, Puerto Rico"
// console.log(getFirstPython(list2)); // "There will be no Python developers"
