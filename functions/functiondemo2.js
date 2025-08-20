function isEvenorOdd(num) {
    if (num % 2 == 0) {

        return "even"; 

        }else {
            return "odd";
        }
    }

    // cheak which numbers are odd which are betwen 1 to 50 

    for (let i=1; i<=50; i++){
       console.log( i, "is" ,isEvenorOdd(i))
    }
