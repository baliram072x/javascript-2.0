# JavaScript Special Characters (Escape Sequences)

## 📌 What I Learned
Today I learned how to use special characters in **JavaScript strings** using **escape sequences**.  
These special characters help in formatting text like adding new lines, tabs, etc.

---

## 🔑 Key Escape Sequences

1. **`\n` → New Line**
   - Moves the text to the next line.
   ```js
   let text = "the new apple iphone\n has been launched";
   console.log(text);



   # JavaScript Operators - README

This file covers the basics of **arithmetic, assignment, relational, logical, and bitwise operators** in JavaScript. Use it for revision.

---

## 1. Arithmetic Operators

Used for performing mathematical calculations.

```js
let x = 10;
let y = 3;

console.log(x + y); // 13 → Addition
console.log(x - y); // 7 → Subtraction
console.log(x * y); // 30 → Multiplication
console.log(x / y); // 3.333... → Division (Quotient)
console.log(x % y); // 1 → Modulus (Remainder)
console.log(y ** 3); // 27 → Exponentiation (Power)
```

---

## 2. Assignment Operators

Used to assign values to variables and perform operations in shorthand.

```js
let a = 10;

// Assign
// = means assign RHS value to LHS

// Add and assign
a += 10; // same as a = a + 10 → 20
console.log("value after addition is", a);

// Modulus and assign
a %= 3; // a = a % 3 → 20 % 3 = 2
console.log("value after storing remainder is", a);

// Multiply and assign
a *= 3; // a = a * 3 → 6
console.log("value after multiplication is", a);

// Subtract and assign
a -= 3; // a = a - 3 → 3
console.log("value after subtraction is", a);

// Divide and assign
a /= 3; // a = a / 3 → 1
console.log("value after dividing is", a);
```

---

## 3. Relational (Comparison) Operators

Used to compare values. Always return **true** or **false**.

```js
let p = 10;
let q = 20;
let r = 5;

console.log("p < q", p < q);   // true
console.log("q > r", q > r);   // true
console.log("p >= r", p >= r); // true
```

Available operators:

* `<` : Less than
* `>` : Greater than
* `<=` : Less than or equal to
* `>=` : Greater than or equal to
* `==` : Equal (checks only value)
* `===` : Strict equal (checks value + type)
* `!=` : Not equal (value only)
* `!==` : Strict not equal (value + type)

---

## 4. Logical Operators

Used to combine multiple conditions.

```js
console.log(true && false); // false → AND
console.log(false || false); // false → OR
console.log(true && true);   // true → AND
console.log((5 < 10) && (6 < 3)); // false → because (6 < 3) is false
```

Operators:

* `&&` (AND) → true only if **both** conditions are true
* `||` (OR) → true if **at least one** condition is true
* `!` (NOT) → inverts value (true → false, false → true)

---

## 5. Bitwise Operators

Work at the binary (bit) level.

### Bitwise NOT `~`

* Flips all bits of the number.
* Formula: `~n = -(n + 1)`

```js
console.log(~true); // -2 (because true → 1, ~1 = -(1+1) = -2)
console.log(~0);    // -1
console.log(~1);    // -2
console.log(~2);    // -3
```

Other bitwise operators:

* `&` (AND)
* `|` (OR)
* `^` (XOR)
* `<<` (Left shift)
* `>>` (Right shift)

---

## Quick Summary Table

| Operator Type | Example  | Meaning                   |
| ------------- | -------- | ------------------------- |
| Arithmetic    | x + y    | Addition                  |
|               | x % y    | Remainder                 |
|               | y \*\* 3 | Exponentiation            |
| Assignment    | a += 10  | a = a + 10                |
| Relational    | p >= r   | Greater than or equal     |
| Logical       | x && y   | AND (both true?)          |
| Bitwise       | \~1      | Bitwise NOT (-(1+1) = -2) |

---

✅ With this README, you can quickly revise all basic operators in JavaScript.



