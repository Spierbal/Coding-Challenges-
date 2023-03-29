function dirReduc(arr) {
  let str = arr.join("");
  let reg = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/;
  while (reg.test(str)) {
    str = str.replace(reg, "");
  }
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

// console.log(
//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// ); //  ["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); //["NORTH", "WEST", "SOUTH", "EAST"][
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
