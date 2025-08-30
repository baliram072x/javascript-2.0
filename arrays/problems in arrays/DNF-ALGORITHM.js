// Q. given an array  which only contain 0 & 1  the data ais shuffled randomely
// write a fucntion that can rearrange the data such that al the 0 s present before 1 

// SEPRATE 0 & 1 FROM BUCKET 
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] =arr[j];
    arr[j] = temp;
}
function seprate(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        //till the time i and j have not passed each other 
        if (arr[i] == 1) { //we just cheak if we have 1 at undex i dosent matter what we have at j 

            swap(arr, i, j);
            j--; //include the new 1 we threw in the right window
        }else{
            i++; // expand the left window directly
        }
    }

}


let arr = [1,1,1,1,0,0,0,0,1,1,1,0];
seprate(arr);
console.log(arr)