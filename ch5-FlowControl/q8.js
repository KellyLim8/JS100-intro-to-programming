function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <=50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <=100) {
    console.log(`${number} is between 50 and 100`);
  } else{
    console.log(`${number} is greater than 100`);
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

/* switch statement should not be used with conditonal . Below wil not run
function numberRange(number){
  switch(number) {
    case (number < 0):
      console.log(`${number} is less than 0`);
      break;
    case (number > 0 && number <25):
      console.log(`${number} is betweeen 0 and 50`);
      break;
    case (number > 50 && number < 100):
      console.log(`${number} is betweeen 50 and 100`);
      break;
    case (number > 100):
      console.log(`${number} is greater than 100`)
      break;
  }
}*/
