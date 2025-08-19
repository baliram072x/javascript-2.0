# JavaScript -- Day 4 Notes

## 📌 Topics Covered

Aaj maine JavaScript me **`if`, `if-else`, `else-if`, aur nested
if-else** ke concepts seekhe.

------------------------------------------------------------------------

### 🔹 1. Simple `if` Statement

Condition true hone par block execute hota hai.

``` js
console.log("start");

if (10 > 5) { // true condition
    console.log("yes");
}

if (12) { // non-zero number is always truthy
    console.log("printed 12");
}

console.log("end");
```

✔️ Output:

    start
    yes
    printed 12
    end

------------------------------------------------------------------------

### 🔹 2. `if-else` Example

``` js
console.log("welcome to prime video");

let isprimemember = false;

if (isprimemember) {
    console.log("enjoy the content");
} else {
    console.log("please buy the subscription to enjoy the content");
}
```

✔️ If condition false hoti hai → else block run hota hai.

------------------------------------------------------------------------

### 🔹 3. `else-if` Example

``` js
let isuserpremium = true;
let isuservip = false;

if (isuserpremium) {
    console.log("enjoy the premium content on hotstar");
} else if (isuservip) {
    console.log("enjoy the vip content on hotstar, for more subscribe premium");
} else {
    console.log("please purchase either vip or premium subscription to enjoy content on hotstar");
}
```

✔️ Multiple conditions check karne ke liye `else if` use hota hai.

------------------------------------------------------------------------

### 🔹 4. Nested `if-else`

``` js
let isuserprime = true;
let isuserdiscovery = true;
let isuseraccorn = true;

if (isuserprime) {
    if (isuserdiscovery) {
        if (isuseraccorn) {
            console.log("enjoy all accorn, prime and discovery content");
        } else {
            console.log("enjoy both prime and discovery content");
        }
    } else if (isuseraccorn) {
        console.log("enjoy both prime and accorn");
    } else {
        console.log("enjoy prime content");
    }
} else {
    console.log("please buy a subscription to enjoy");
}
```

✔️ Ek condition ke andar dusri condition check karne ko nested if-else
bolte hai.

------------------------------------------------------------------------

## ✅ Summary

-   `if` → sirf ek condition check karne ke liye.\
-   `if-else` → condition true/false dono handle karne ke liye.\
-   `else-if` → multiple conditions handle karne ke liye.\
-   `nested if-else` → ek condition ke andar dusri condition check karne
    ke liye.

------------------------------------------------------------------------

⚡ Ye README revision ke liye short notes jaisa kaam karega 🚀

CONDITIONAL STATEMENT -->
using conditional statement we can take decision and corrospondinly change the action we want to do

we have ---> if and else statement 

//syntax 
if(  condition ){
    ----> creates a block 
}

if this condition holds true then region in curly bracked is executed 

if the condition is false then write

else{
    --> condition is false then this part is exectuted 
}

--> if the condition is true only if block is excecuted and only else block is completly avoided 

-->if the condition is false then if block is completly avoided and else block is only executed 