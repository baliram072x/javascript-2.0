/* 
given the value n( positive intger )
print the following pattern on the screen 
*/

let n=4;

for( let row =1 ; row<= n ; row++){
    let str= "";
    for(let col=1; col<= row; col++){
        str+= "*"
    }
    console.log(str)
}