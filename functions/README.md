# JavaScript Practice - Functions, Loops & Patterns

Today I practiced and learned the following concepts in **JavaScript**:

---

## 1. Even or Odd Function
- Created a function to check whether a number is even or odd.
- Practiced returning `true/false` and also `"even"/"odd"` as strings.

```javascript
function isEvenorOdd(num) {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}
```

### Usage Example:
```javascript
console.log(isEvenorOdd(10)); // even
console.log(isEvenorOdd(11)); // odd
```

---

## 2. Looping with Even/Odd
- Used **for loop** from 1 to 50 to check if numbers are even or odd.

```javascript
for (let i=1; i<=50; i++){
    console.log(i, "is", isEvenorOdd(i));
}
```

---

## 3. Functions Returning Values
- Practiced creating functions that return values.

### Welcome Function:
```javascript
function welcome(name){
    console.log("Hello", name, "welcome to script");
}
welcome("Sanket");
```

### Add Function:
```javascript
function add(x, y) {
    let c = x + y;
    return c;
}
console.log(add(10, 20)); // 30
```

---

## 4. Prime Number Check
- Wrote a function to check whether a number is **prime or not**.

```javascript
function isprime(x) {
    if (x <= 1) return false;
    for (let i=2; i<=x-1; i++){
        if(x % i == 0){
            return false;
        }
    }
    return true;
}
console.log(isprime(5)); // true
console.log(isprime(6)); // false
```

---

## 5. Pattern Printing
Practiced multiple pattern printing programs using **loops**.

### Square Pattern (n x n)
```javascript
function pattern(n){
    for (let row = 1; row <= n; row++) {
        let star = "";
        for (let col = 1; col <= n; col++) {
            star += "*";
        }
        console.log(star);
    }
}
pattern(6);
```

### Right-Angled Triangle
```javascript
let n=4;
for(let row=1; row<=n; row++){
    let str= "";
    for(let col=1; col<= row; col++){
        str+= "*";
    }
    console.log(str);
}
```

### Pyramid Pattern
```javascript
function pattern(n) {
    for (row = 1; row <= n; row++) {
        let str = "";
        let space = n - row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }
        let stars = 2 * row - 1;
        for (col = 1; col <= stars; col++) {
            str += "*";
        }
        console.log(str);
    }
}
pattern(5);
```

### Diamond Pattern
```javascript
function pattern(n) {
    for (row = 1; row <= n; row++) {
        let str = "";
        let space = n - row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }
        let stars = 2 * row - 1;
        for (col = 1; col <= stars; col++) {
            str += "*";
        }
        console.log(str);
    }
    for (row = 1; row <= n; row++) {
        let str = "";
        let space = row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }
        let stars = 2 * (n-row) - 1;
        for (col = 1; col <= stars; col++) {
            str += "*";
        }
        console.log(str);
    }
}
pattern(5);
```

### Hollow Hourglass Pattern
```javascript
function upper(n) {
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftstars = row;
        for (let i = 1; i <= leftstars; i++) {
            str += "*";
        }
        let spaces = n - 2 * row;
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }
        let rightstars = row;
        for (let i = 1; i <= rightstars; i++) {
            str += "*";
        }
        console.log(str);
    }
}

function middle(n){
    let str = "";
    for (i = 1; i <= n; i++) {
        str += "*";
    }
    console.log(str);
}

function lower(n){
    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftstars = ((n-1)/2)-row+1;
        for (let i = 1; i <= leftstars; i++) {
            str += "*";
        }
        let spaces = 2*row-1;
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }
        let rightstars = ((n-1)/2)-row+1;
        for (let i = 1; i <= rightstars; i++) {
            str += "*";
        }
        console.log(str);
    }
}
upper(7);
middle(7);
lower(7);
```

---

# ✅ Summary of Today’s Learning
1. Functions (with return values & console logging)
2. If-Else & Nested Loops
3. Prime Number Logic
4. Pattern Printing (square, triangle, pyramid, diamond, hourglass)
5. Practiced **8 problems** in total.

---

This README will help me revise all concepts in one place 🚀
