/* The function determines whether its arguments is an even number.
If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. 
For now, assume that the argument is always an integer.*/

function evenOrOdd(num){
  if (!Number.isInteger(num)){
    console.log('Please provide an integer as the value');
    return;
  } 
  
  if (num % 2 === 0){
    console.log('even');
  } else {
    console.log('odd');
    }
  
}

evenOrOdd(2); // even
evenOrOdd(19); // odd