function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
Q9. Identify all of the variables named on each line of the following code. 
You may assume that question is the name of a built-in function in JavaScript 
(it is not, so this code won't work as written).

Q10. Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, 
you may assume that the code from Exercise 9 is the entire program.

line 1. the function multiply is a global and its parameters 'left' and'rightr are local variables
line2. product is a local variable to the function multiply
line 3. product
line6. the function getNumber is a global variable and its paramter prompt is a locla variable
!! line7: parseFloat, question, prompt. parseFloast is an actual built-in function and we are pretending here
!! that question is also a built-in function
line 10 and 11. left and right are global variables
  !! getNumber is also a variable
!! line12: console, left, right, multiply. 'console' is the variable name for the built-in 
!! Console object. In contrast, console.log is the name of a method in that object.
!! As such, log is a property name, not a variable name
*/
