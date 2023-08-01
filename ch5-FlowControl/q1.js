//What values do the following expressions evaluate to?
false || (true && false); //false
true || (1 + 2); //true -short circuits
(1 + 2) || true; //3 - short circuits
true && (1 + 2); //3
false && (1 + 2); //false - short circuits
(1 + 2) && true; // true
(32 * 4) >= 129; //false
false !== !true; //false !=== false -> false
true === 4; // false
false === (847 === '847'); //(847 === '847') evaluates to false, therefore false === false -> true
false === (847 == '847'); //(847 == '847')evaluates to true. false===true -> false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; 
/*false || (!(20) ===20)  || (82 ===82) || false
  (false || false || true) || false
  (false ||true) ||false
  true || false 
  short cicruit at true

note: !(100 / 5) is a boolean value, and === always returns false when the 
operands have different types. 

  */