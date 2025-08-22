// given a number x, write afunction to dertermine 
//weather the function is a prime number or not?
// ----->

/* how to cheak if a number is a prime or not?
so what types of numbers are prime?
eg x=3, x=5
 beacuse prime are only divisible by 1 and the number itself
 
 if there is atleat one more number apart from 1 and x 
 that divides x completly then x in nonprime



/
*/
function isprime(x) {
    if (x <= 1) return false; 
   for( let i=2; i<=x-1; i+=1){
    if(x%i ==0){
        return false
    }
   }
   return true
}

let a = 1;
let result = isprime(a)
console.log(result)