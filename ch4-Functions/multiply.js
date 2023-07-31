// get two numbers as input from the use -> getNumber()
//multiply two numbers, reutrn result -> multiply()
// output our equation with the result

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

function multiply (num1,num2){
  return num1*num2;
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');
console.log(`${first} * ${second} = ${multiply(first, second)}`);