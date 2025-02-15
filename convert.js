function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const rakibHight = inchToFeet(55);
console.log(rakibHight);

//---------------------------------------------
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch.";
  return result;
}
const rakibHight2 = inchToFeet2(68);
console.log(rakibHight2);

//------- miles to kilo 
function milesToKilometers(miles) {
  const conversionFactor = 1.60934;
  result = miles * conversionFactor;

  return result;
}
console.log(milesToKilometers(10));

//---kilo to miles
function kilometersToMiles(kilo) {
  const conversionFactor = 0.621371;
  result = kilo * conversionFactor;

  return result;
}
console.log(kilometersToMiles(10));

