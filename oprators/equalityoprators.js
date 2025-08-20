/* == --> called abstract equality oprators
  it cheaks the type of both oprands 
  if the types if same then it calls ===
  if times are not same then type conversion occurs (coercian)
  then type comparison is done

  === --> strict equality oprator 
  it also cheaks type of both oprands
  if types are diffrents it returns false 
  it types are same then value comparisons occurs
  
 */
console.log(1 == "baliram");
console.log(NaN === NaN);


console.log( typeof false);
console.log(typeof undefined);
console.log(typeof null)