
function pattern(n) {
    for (row = 1; row <= n; row++) {
        let str = " ";
        let space = n - row;
        for (let j = 1; j <= space; j++) {

            str += " ";
        }
        let stars = 2 * row - 1;
        for (col = 1; col <= stars; col++) {
            str += "*"
        }
        console.log(str);

    }

     for (row = 1; row <= n; row++) {
        let str = " ";
        let space = row;
        for (let j = 1; j <= space; j++) {

            str += " ";
        }
        let stars = 2 *(n-row) - 1;
        for (col = 1; col <= stars; col++) {
            str += "*"
        }
        console.log(str);

    }
}

pattern(9)