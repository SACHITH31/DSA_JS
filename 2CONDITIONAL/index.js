//+ve, -ve, 0
// const myNum = 10
// if (myNum > 0) {
//     console.log(`${myNum} is positive number`)
// } else if (myNum < 0) {
//     console.log(`${myNum} is negative number`)
// } else if (myNum === 0) {
//     console.log(`${myNum} is zero`)
// } else {
//     console.log("Check the type😏")
// }


//largest of 3 numbers
// const num1 = 1222
// const num2 = 20
// const num3 = 1000000000
// let big = num1
// if (big < num2) {
//     if (big < num3) {
//         big = num3
//     } else {
//         big = num2
//     }
// } else {
//     if (big < num3) {
//         big = num3
//     }
// }
// console.log(big);

//even or odd 
  //working of &: if both are 1 then returns 1 or else 0
// const myNum = 10
// if ((myNum & 1) === 0) {
//     console.log(`${myNum} is even number.`)
//     // console.log((myNum & 1))
// } else {
//     console.log(`${myNum} is odd number.`)
//     // console.log((myNum & 1))
// }

//validation of age for vote
// const myAge = 18
// if (myAge >= 18) {
//     console.log('You are eligible')
// } else {
//     console.log('You are not eligible')
// }

//Grade Calculator
// const total = 400
// let grade;
// const subject1 = 90
// const subject2 = 90
// const subject3 = 90
// const subject4 = 90
// const totalObtained = subject1 + subject2 + subject3 + subject4
// // console.log(`The total marks obtained is: ${totalObtained}`)
// const percent = (totalObtained / total) * 100
// // console.log(`${percent}%`);
// if (percent <= 100) {
//     grade = 'A'
// } else if ((percent >= 80) && (percent <= 89)) {
//     grade = 'B'
// } else if ((percent >= 70) && (grade <= 79)) {
//     grade = 'C'
// } else {
//     grade = 'F'
// }
// if (grade === 'F') {
//     console.log(`You are fail with grade ${grade}`)
// } else {
//     console.log(`You are pass with grade ${grade}`)
// }

//vowels and consonants
// const vowelsContainer = ['a', 'e', 'i', 'o', 'u']
// const myChar = 'Abcdef'
// const tempMyChar = myChar.toLowerCase()
// let myObj = {}
// if (vowelsContainer.includes(tempMyChar) && tempMyChar.length === 1) {
//     console.log(`${myChar} is vowel`)
// } else {
//     console.log(myChar)
//     for (let char of tempMyChar) {
//         if (vowelsContainer.includes(char)) {
//             // myObj[char.toUpperCase()] = 'vowel'
//             console.log(`${char.toUpperCase()} is vowel`)
//         } else {
//             // myObj[char.toUpperCase()] = 'consonant'
//             console.log(`${char.toUpperCase()} is consonant`)
//         }
//     }
// }
// // console.log(myObj)

//leap year
let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}

