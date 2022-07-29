function findLongest(str) {
  const spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// Solution 2:
//const findLongest = (str) => Math.max(...str.split(' ').map(word => word.length));

//console.log(findLongest("The quick white fox jumped around the massive dog")) // --> 7
//console.log(findLongest("Take me to tinseltown with you")) // --> 10
