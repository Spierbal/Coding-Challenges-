// Solution

const reverseWords = str => str.split(" ").reverse().join(" ");

// Description:
// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Test Cases:
// describe("reverseWords",function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(reverseWords("hello world!"), "world! hello")
//     Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
//     Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
//     Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
//     Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
//   });
//   it ("should work for random strings", function(){
//     var k, r, randomString = function(n){
//       var i, res = []
//       for(i = 0; i < n; ++i){
//         res.push(String.fromCharCode(32 + ~~(Math.random() * 95)));
//       }
//       return res.join('').replace(/\s+/,' ');
//     }
//     for(k = 0; k < 40; ++k){
//       r = randomString(Math.random() * 300);
//       Test.expect(reverseWords(r) == r.split(' ').reverse().join(' '), r + " wasn't reversed correctly");
//     }
//   });
// });
