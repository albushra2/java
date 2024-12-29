// 1. tellFortune
function tellFortune(job, location, partner, numOfKids) {
  return `You will be a ${job} in ${location}, and married to ${partner} with ${numOfKids} kids.`;
}
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));

// 2. calculateDogAge
function calculateDogAge(age) {
  const dogAge = age * 7;
  return `Your doggie is ${dogAge} years old in dog years!`;
}
console.log(calculateDogAge(1));

// 3. calculateSupply
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const total = (maxAge - age) * amountPerDay * 365;
  return `You will need ${total} to last you until the ripe old age of ${maxAge}`;
}
console.log(calculateSupply(30, 3));

// 4. greet
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet('Adam'));

// 5. Errors in functions
/*
Error in the functions:
- The parameter name "cat" is not used in the first function.
- Parameters must be variables; `7` and `'7'` are literals and invalid as parameter names.
*/

// 6. Fix functions
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

// 7. cube
function cube(num) {
  return num ** 3;
}
console.log(cube(4));

// 8. multiply
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

// 9. canIGetADrivingLicense
function canIGetADrivingLicense(age) {
  return age >= 20 ? 'yes you can' : `please come back after ${20 - age} years to get one`;
}
console.log(canIGetADrivingLicense(21));

// 10. sameLength
function sameLength(str1, str2) {
  return str1.length === str2.length;
}
console.log(sameLength("tree", "clue"));

// 11. largerNumber
function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(largerNumber(5, 6));

// 12. smallerNumber
function smallerNumber(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}
console.log(smallerNumber(8, 6, 7));

// 13. shorterString
function shorterString(...strings) {
  return strings.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}
console.log(shorterString("air", "school", "car", "by", "github"));

// 14. longerString
function longerString(...strings) {
  return strings.reduce((longest, current) => current.length > longest.length ? current : longest);
}
console.log(longerString("air", "school", "car", "github"));

// 15. isEven
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));

// 16. isOdd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(5));

// 17. positive
function positive(num) {
  return Math.abs(num);
}
console.log(positive(-5));

// 18. fullName
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Adam", "McCallen"));

// 19. average
function average(...nums) {
  return nums.reduce((sum, num) => sum + num, 0) / nums.length;
}
console.log(average(1, 2, 3, 4, 5));

// 20. randomNumber
function randomNumber() {
  return Math.random();
}
console.log(randomNumber());

// 21. randomBetweenNumbers
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1, 8));

// 22. scoreInUniversity
function scoreInUniversity(score) {
  if (score >= 95) return 'A';
  if (score >= 85) return 'B';
  if (score >= 70) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}
console.log(scoreInUniversity(96));

// 23 & 24. counter and resetCounter
let counterValue = 0;
function counter() {
  return ++counterValue;
}

function resetCounter() {
  const lastValue = counterValue;
  counterValue = 0;
  return `${lastValue} and the counter reset now`;
}

console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());
