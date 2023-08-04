let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`)
//console.log(`In 10 years, you will be ${age + 10} years old.`);
//console.log('In 20 years, you will be ${age + 20} years old.');
//console.log('In 30 years, you will be ${age + 30} years old.');
//console.log('In 40 years, you will be ${age + 40} years old.');

for (let counter = 10; counter <= 40; counter += 10){
  console.log(`In ${counter} years, you will be ${age + counter} years old`);
}