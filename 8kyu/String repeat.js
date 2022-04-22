// solution 1:
const repeatStr = (n, s) => Array(n).fill(s).join("");

//shortest solution:
//const repeatStr = (n, s) => s.repeat(n);


//console.log(repeatStr(3, "ha"))
//Write a function called repeatStr which repeats the given string string exactly n times.
// Examples:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


Test Cases:

describe("Tests", function() {
    it ("Basic tests", function() {
      Test.assertSimilar(repeatStr(3, "*"), "***");
      Test.assertSimilar(repeatStr(5, "#"), "#####");
      Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
      Test.assertSimilar(repeatStr(5, ">"), ">>>>>");
      Test.assertSimilar(repeatStr(10, "!"), "!!!!!!!!!!");
      Test.assertSimilar(repeatStr(3, "hello "), "hello hello hello ");
      Test.assertSimilar(repeatStr(3, "$"), "$$$");
      Test.assertSimilar(repeatStr(5, "a"), "aaaaa");
      Test.assertSimilar(repeatStr(6, "A"), "AAAAAA");
      Test.assertSimilar(repeatStr(7, "aA"), "aAaAaAaAaAaAaA");
    });
    it ("Random tests", function() {
      for(let i = 0; i < 10; i++) {
        let num = Test.randomNumber();
        let s = Test.randomToken()[0];
        Test.assertSimilar(repeatStr(num, s), solution(num, s));
      }
    });
  });