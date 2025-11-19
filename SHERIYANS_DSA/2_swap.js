// 3 ways of SWAPPING

let a = 10;
let b = 20;

//1 METHOD
// let temp = a
// a = b
// b = temp

//2 METHOD
// a = a + b //30
// b = a - b //30 - 20 = 10
// a = a - b // 30 - 10 = 20

//3 METHOD
[a, b] = [b, a];

console.log(a, b);

