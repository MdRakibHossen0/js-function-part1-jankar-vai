function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const lippi = leapYear(2021);
console.log(lippi);

/**

 * If those year that is not divisible by 100,if the year
 is divisible by 4:then it will be a leap year.
*if the year is divisible by 400,then it is a leap year.
 
 */
//Logic very complex but this is real solution in LeapYear

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 ) {
    return true;
  } else {
    return false;
  }
}
const leap = isLeapYear(2100);
const leap1 = isLeapYear(2400);
const leap2 = isLeapYear(2026);
const leap3 = isLeapYear(1900);
console.log(leap, leap1, leap2, leap3);
