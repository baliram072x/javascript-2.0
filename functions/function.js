// creating the fucntion to cheak if the number is even or odd 

function isEvenorOdd(num) {
    if (num % 2 == 0) {

        return true; 

        }else {
            return false;
        }
    }

let x = 11;
if (isEvenorOdd(x)) {
    console.log("even")

}else{
    console.log("odd")
}

for (let i=1; i<=20; i++){
    let result =isEvenorOdd(i);
    if(result== true){ 
         console.log(i,"even")
        }else{
            console.log(i,"odd")
        }
      

}

let a= 10;
let y=11;
let z=12;

if(isEvenorOdd(a)){
    console.log("a is even")
}else{
    console.log("a is odd ")
}

if(isEvenorOdd(y)){
    console.log("y is even")
}else{
    console.log("y is odd ")
}

if(isEvenorOdd(z)){
    console.log("z is even")
}else{
    console.log("z is odd ")
}


