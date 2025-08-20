
function pattern(n) {
    for (row = 1; row <= n; row++) {
        let str = " ";
        let space = n - row;
        for (let j = 1; j <= space; j++) {
            // for( space=1; space<= n-row; space++){
            str += " ";
        }
        for (col = 1; col <= row; col++) {
            str += "*"
        }
        console.log(str)
    }
}
pattern(9)
pattern(3)