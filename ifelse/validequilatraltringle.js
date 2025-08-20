// given the side length og a triangle in the form of 3 triangle 
//cheak if the given triangle is equilatral or sclen triangle


let a=5;
let b=4;
let c=6;

if(a==b && b==c && c==a){
    console.log("equilatral triangle")
}
else if(a!=b && b!= c&& c!=a ){
    console.log("scales triangle ")
}
else{
    console.log("isoscales triangle")
}