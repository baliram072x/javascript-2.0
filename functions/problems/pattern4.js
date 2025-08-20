
function pattern(n) {
    /* we will write a loop which will repete some tasks 
        for very row
        for
    */

    for (row = 1; row <= n; row++) {
        //inside this loop of row we will do the tasks for each row
        //task some spaces followed by some stars 
        let str = " ";
        let space = n - row;
        //loop whch will contatinate space
        for (let j = 1; j <= space; j++) {

            str += " ";
        }
        // after the above loop ends , we will be having space in it 
        // loop to contatinate stars 
        let stars = 2 * row - 1;
        for (col = 1; col <= stars; col++) {
            str += "*"
        }
        console.log(str);
    }


}

pattern(9)