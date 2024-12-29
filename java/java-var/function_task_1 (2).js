// 1
function tellFortune(jobTitle, location, partnerName, numKids) {
  return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`;
}

// 2
function calculateDogAge(puppyAge) {
  const dogAge = puppyAge * 7;
  return `Your doggie is ${dogAge} years old in dog years!`;
}

// 3
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const totalNeeded = (maxAge - age) * 365 * amountPerDay;
  return `You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}.`;
}

// 4
function greet(name) {
  return `Hello ${name}`;
}

// 5
// Errors explained:
// - The first function references `x` without defining it.
// - The second and third functions have invalid parameters (7, '7').

function double(value) {
  return 2 * value; // Correct implementation
}

// 6
// Fixed functions
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}

// 7
function cube(num) {
  return num ** 3;
}

// 8
function multiply(a, b) {
  return a * b;
}

// 9
function canIGetADrivingLicense(age) {
  if (age >= 20) {
      return "yes you can";
  } else {
      return `please come back after ${20 - age} years to get one`;
  }
}

// 10
function sameLength(str1, str2) {
  return str1.length === str2.length;
}

// 11
function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// 12
function smallerNumber(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}

// 13
function shorterString(...strings) {
  return strings.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
}

// 14
function longerString(...strings) {
  return strings.reduce((longest, current) => current.length > longest.length ? current : longest);
}

// 15
function isEven(num) {
  return num % 2 === 0;
}

// 16
function isOdd(num) {
  return num % 2 !== 0;
}

// 17
function positive(num) {
  return Math.abs(num);
}

// 18
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 19
function average(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

// 20
function randomNumber() {
  return Math.random();
}

// 21
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

// 22
function scoreInUniversity(score) {
  if (score >= 95) return 'A';
  if (score >= 85) return 'B';
  if (score >= 70) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}

// 23 & 24
let counterValue = 0;

function counter() {
  return ++counterValue;
}

function resetCounter() {
  const temp = counterValue;
  counterValue = 0;
  return `${temp} and the counter reset now`;
}
