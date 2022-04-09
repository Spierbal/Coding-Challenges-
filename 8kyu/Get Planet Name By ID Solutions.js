// Solution:

function getPlanetName(id) {
  switch (id) {
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
    default:
      return "Invalid, Planet Not Found!";
  }
}

// Description:
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// Test Cases:

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(getPlanetName(2), 'Venus');
//   Test.assertEquals(getPlanetName(5), 'Jupiter');
//   Test.assertEquals(getPlanetName(3), 'Earth');
//   Test.assertEquals(getPlanetName(4), 'Mars');
//   Test.assertEquals(getPlanetName(8), 'Neptune');
//   Test.assertEquals(getPlanetName(1), 'Mercury');
//     });
//   });
