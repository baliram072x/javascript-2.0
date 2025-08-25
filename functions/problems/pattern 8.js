/*
---1
--12
-123
1234

for every row we  have a task to print some spaces followed by 
number
*/


function pattern(n){
    for(let row =1 ; row <=n ; row++){
        //space
        let str ="";
        let space = n-row;
        for(let i=1; i<=space; i++){
            str += " ";
        }
        let counter =1;
        for (let j=1; j<=row; j++){
            str+= counter
            counter++;
        }
        console.log(str)
    }
}

pattern(5)