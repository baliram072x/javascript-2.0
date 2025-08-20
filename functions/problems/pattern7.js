function upper(n) {
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = " ";
        let leftstars = row;
        for (let i = 1; i <= leftstars; i++) {
            str += "*"
        }
        let spaces = n - 2 * row;
        for (let j = 1; j <= spaces; j++) {
            str += " "
        }
        let rightstars = row;
        for (let i = 1; i <= rightstars; i++) {
            str += "*"
        }console.log(str)

    
    }
}


function middle(n){
    let str = " "
        for (i = 1; i <= n; i++) {
            str += "*"
        } console.log(str)
}

function lower(n){
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = " ";
        let leftstars = ((n-1)/2)-row+1;
        for (let i = 1; i <= leftstars; i++) {
            str += "*"
        }
        let spaces =2*row-1;
        for (let j = 1; j <= spaces; j++) {
            str += " "
        }
        let rightstars = ((n-1)/2)-row+1;
        for (let i = 1; i <= rightstars; i++) {
            str += "*"
        }console.log(str)

    
    }
}

upper(7)
middle(7)
lower(7)