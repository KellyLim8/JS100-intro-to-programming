function capitalise(word){
  if (word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

console.log(capitalise("hello world")); // HELLO WORLD
console.log(capitalise('goodbye')); //goodbye

// function written using ternary operation (replace lines 2 to 6)
//  return ((word.length > 10) ? word.toUpperCase() : word);