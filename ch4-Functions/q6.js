function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/* function arguments: line 2- num1, num2, num3 and line 6 - 2,3,4
function body: line 2 and 3 (wrong) 
    !consists of eveything between the { online 1 and the } on lines 4
function declaration: line 1 (wrong)
    !is everything on lines 1-4
function invocation: line 6 'multiplyNumbers(2,3,4)'
function name: multiplyNumbers
function parameters: line 1(num1,num2,num3)
function return value: line 3: result
    !the function's return value is determined by multiplying the arguments together.
    !the value is initially stored in the local variable result in the function's body.
    !it gets assigned to product after the function returns

names of all variables in this program: multiplyNumbers, result, product (line 6), the 
and the function, multiplyNumbers ' parameters -num1,num2,num3 are variables
    !In particular, the function name and its parameters are all variables. In this case, multiplyNumbers is a global variable, but num1, num2, and num3 are local variables defined inside the function.
*/