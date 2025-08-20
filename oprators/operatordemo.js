//arithmatic operators

let x = 10;
let y = 3;
console.log(x + y); //addition
console.log(x - y); //substraction
console.log(x * y); //multiplication
console.log(x / y); //division-> quotient
console.log(x % y); //division-> reminder
console.log(y ** 3); //exponent

// assignment oprators 

let a = 10; // here = is just assign value from rhs to lhs
a += 10; //here += actually doing a=a+10
console.log("value after addition is", a)

a %= 3;
console.log("value after storing reminder is", a)

a *= 3;
console.log("value after multiplication is", a)

a -= 3;
console.log("value after subtraction is", a)

a /= 3;
console.log("value after dividing is", a)

//relationals oprators 
let p = 10;
let q = 20;
let r = 5;
console.log("p<q", p < q);
console.log("q>r", q > r);
console.log("p>=r", p>=r)

// logical operators 
console.log( true && false);
console.log(false || false);
console.log(true && true );
console.log((5 < 10) && (6 < 3));
console.log(~true);


