/**
 * array has some duplicate elements
 * []
 */

const biriyaniKhorName = [
  "Rakib",
  "Sakib",
  "jakib",
  "Rifat",
  "Rakib",
  "jakib",
  "Omin",
  "Rifat",
];

const numbers = [2, 4, 33, 55, 66, 4, 2, 70, 80, 66];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biriyaniKhorName);
console.log(uniqueArray);
