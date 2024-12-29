// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2- Write a program that prints the even numbers from 1 to 10 using a for loop.
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
  let num = 1;
  while (num <= 10) {
    if (num % 2 !== 0) {
      console.log(num);
    }
    num++;
  }
  
  // 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
  let userNumber = 5; // You can replace 5 with any number entered by the user
  for (let i = 1; i <= 10; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`);
  }
  
  // 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
  let sum = 0;
  let counter = 1;
  while (counter <= 100) {
    sum += counter;
    counter++;
  }
  console.log("Sum from 1 to 100 is:", sum);
  
  // 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
  let factorialNumber = 5; // You can replace 5 with any number entered by the user
  let factorial = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${factorialNumber} is: ${factorial}`);
  
  // 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
  let maxFib = 10; // You can replace 10 with any number entered by the user
  let a = 0, b = 1, next;
  console.log(a); // Print first Fibonacci number
  while (b <= maxFib) {
    console.log(b);
    next = a + b;
    a = b;
    b = next;
  }
  
  // 8- Write a program that prints the reverse of the following numbers: 5, 10, 15, 20 using a while loop.
  let numbers = [5, 10, 15, 20];
  let index = numbers.length - 1;
  while (index >= 0) {
    console.log(numbers[index]);
    index--;
  }
  