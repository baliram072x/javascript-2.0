// unary oprator are those oprator require only one opranda
/*
a++ --> postfix unary addition
it refrences to incerement by 1 unit

eg., 
let a = 10;
y=a++

1)we first assign value of a to y(i.e, old value)
2) increment a by one 
 eg., let a=10;
 let y = a++;
 console.log( a,y);

*/



let a = 10;
z = a++
console.log(a, z);

a++;
console.log(a, z);


/*
++a; --->  prefixed unary addiction (increment first then assign)
eg.,
let a=10;
let y=++a;

1)here first increment the value of y first
2) assign value of a to y 

let a=10;
let y=++a;

console.log(a,y);
*/


let b = 10;
let y = ++b;

console.log(b, y);

//same for a-- 


let c = 10;
let p = c--;

console.log(c, p);


/*
+ --> (unary plus) ---> it tries to converts the variables into numbers if it is not already a no. 
 eg., 
 let x="22";
let q=+x;

// it doesnt chnage the original oprand but instead returns a converted value

 typeof y --> number
 typeof x --> string
*/

 let x="22";
let = +x;

 console.log( typeof x)
 console.log( typeof y)

//(-)--> unary minus
// it also converts  the oprands into number bbut always convert number into negitave

 let d="22";
let r = -d;

 console.log( r)
 
 console.log( typeof r)

//  // type of is also a unary oprator

 let e =undefined;

 console.log(typeof e)