const removeUrlAnchor = url => url.split("#")[0];

// Solution 2:
// const removeUrlAnchor = url => url.replace(/#\w*/g,  "")

// console.log(removeUrlAnchor("www.codewars.com#about")); // 'www.codewars.com'
// console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about")); // 'www.codewars.com/katas/?page=1'
// console.log(removeUrlAnchor("www.codewars.com/katas/")); // 'www.codewars.com/katas/'
