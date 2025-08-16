# JavaScript Basics (Day 1 Learning)

This file contains my first practice code in JavaScript.  
Here are the concepts I learned today:

---

## Printing in Console
```js
console.log(10);
console.log("Hello World");
```
- `console.log()` is used to print values in the console.

---

## Variables in JavaScript

### 1. Using `var`
```js
var score = 10;
var marks = 5;
```
- Can be re-declared & updated.  
- **Function scoped**.

### 2. Using `let`
```js
let age = 12;
let flag = 0;
```
- Cannot be re-declared in the same scope.  
- Can be updated.  
- **Block scoped**.

### 3. Using `const`
```js
const x = 100;
```
- **Constant value** (cannot be updated or re-declared).  

---

## Data Types in JavaScript

### Primitive Data Types
- Number → `let num = 10;`
- String → `let name = "sanket";`
- Boolean → `let isStudent = false;`
- Undefined → `let salary;`
- Null → `let company = null;`

### Non-Primitive Data Types
- Objects (compositions of other data types)  
Example:
```js
let user = {
  name: "baliram",
  age: 18,
  posts: {
    createdAt: "25 Jun 2025",
    text: "My first post"
  },
  gender: "Male"
};
```

---

## Example Code
```js
var marks = 100;
var name = "sanket";
var age;
var company = null;
var salary = undefined;
var isStudent = false;

console.log("Marks = ", marks);
console.log("Name = ", name);
console.log("Age = ", age);
console.log("Company = ", company);
console.log("salary = ", salary);
console.log("isStudent= ", isStudent);
```

---

✅ **Summary:**  
- Learned `console.log()`  
- Difference between `var`, `let`, and `const`  
- Different **data types** in JavaScript  
- Basics of **object structure**  
