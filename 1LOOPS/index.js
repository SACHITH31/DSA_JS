// // factorial of a number
// const myNum = 2
// let sum = 1

// for (let i = 1; i <= myNum; i++) {
//     sum *= i
// }
// console.log(`Factorial of ${myNum} is: ${sum}`)

//reverse a number
// const myNum = 12345
// let temp = myNum
// let rem;
// let res = ''
// while (temp != 0) {
//     rem = temp % 10
//     temp = Math.floor(temp/10)
//     res += String(rem)
// }
// let reversedNumber = (Number(res))
// console.log(`Reversed Number of ${myNum} is: ${reversedNumber}`)

//fibinooci upto n
const endingRange = 8
let num1 = 0
let num2 = 1
let result = num1 + num2
console.log(num1)
console.log(num2)
for (let i = result; i <= endingRange; i++) {
    if (result <= endingRange) {
        console.log(result)
        num1 = num2
        num2 = result
        result = num1 + num2
    }
}
