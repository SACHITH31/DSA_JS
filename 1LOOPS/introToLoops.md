# 🔄 Fundamentals: Programming Loops

---

## 💡 Definition (In Simple Terms)

A loop is a programming construct that allows you to **repeat a block of code multiple times** until a certain condition is met.

It helps **automate repetitive tasks**, making your code more efficient, cleaner, and easier to read.

---

## 📊 Types of Loops

### 1. For Loop

* **When to Use:** When the **number of iterations is known** beforehand.
* **Structure:** Initialization, Condition, and Iteration Expression are all defined in one place.

#### Example (JavaScript)

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
```
### 2. While Loop
* **When to Use:** When the **number of iterations is unknown** and depends on a condition.
* **Structure:** Only the condition is defined; initialization and iteration are handled separately.
#### Example (JavaScript)
```javascript
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}
```
### 3. Do-While Loop
* **When to Use:** When you want to ensure that the code block is executed **at least once** before checking the condition.
* **Structure:** Similar to the while loop, but the condition is checked after the code block.
#### Example (JavaScript)
```javascript  
let i = 0;
do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```
---
### 4. For...of Loop (ES6+)
* **When to Use:** When you want to iterate over **iterable objects** like arrays.
* **Structure:** Simplifies the syntax for looping through elements. 
#### Example (JavaScript)
```javascript  
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log(element); // Output: 'a', 'b', 'c'
}
```
---
### 5. For...in Loop (ES6+)
* **When to Use:** When you want to iterate over the **properties of an object**.
* **Structure:** Loops through the keys of an object. 
#### Example (JavaScript)
```javascript
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
      console.log(key); // Output: 'a', 'b', 'c'
   }
```
---
