// given a value n(positive integer),
//print the following pattern on the screen 

// we have to print nxn grid


// let stars = "";

// stars += "*"
// stars += "*"
// stars += "*"
// stars += "*"
// stars += "*"

// console.log(stars)


function pattern(n){
for (let row = 1; row <= n; row++) {
    //task``
    //the task is to contaatinate "* " n times
    let star = "";
    for (let col = 1; col <= n;  col++) {
        star += "*";

    }
    console.log(star)
}

}

pattern(6);
pattern(8);


// let x= "abc"
// let y= "def"
//let z= "xyz"

// let  r= x+y


