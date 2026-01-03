// find the largest of 3 numbers
function largestOf3Numbers (num1, num2, num3) {
    let big = num1
    if (num1 > num2) {
        if (num1 < num3) {
            big = num3
        }
    } else {
        if (num2 > num3) {
            big = num2
        } else {
            big = num3
        }
    }
    return big
}

const result1 = largestOf3Numbers(20, 20, 1)
console.log(result1);


// find wheather the number is postive, negative or zero
function checkingTheNumber (num) {
    if (typeof num === 'number') {
        if (num === 0) {
            return `${num} is zero.`
        } else if (num < 0) {
            return `${num} is negative number`
        } else {
            return `${num} is positive number`
        }
    } else {
        return `Please Enter valid Number.`
    }
}
const myNum = 5
const result2 = checkingTheNumber(myNum)
console.log(result2);


// calculate electricity bill
function findCurrentBill (units) {
    let sum = 0
    for (let i = 1; i <= units; i++) {
        if (i <= 100) {
            sum += 5
        } else if (i > 100 && i <= 200) {
            sum += 7
        } else if (i > 200 && i <= 300) {
            sum += 10
        } else {
            sum += 12
        }
    };
    return sum
}
const units = 230
const result3 = findCurrentBill(units)
console.log(result3);


// check wheather the character is a vowel or consonant
function checkVowelOrConsonant (myChar) {
    if (typeof myChar === 'string') {
        const myCharUpperCase = myChar.toUpperCase()
        if (myCharUpperCase === ('A' || 'E' || 'I' || 'O' || 'U')) {
            return `${myChar} is a vowel.`
        } else {
            return `${myChar} is not an vowel.`
        }
    }
    return `Please Enter Valid Character`
    
}
const myChar = 'a'
const result4 = checkVowelOrConsonant(myChar)
console.log(result4);


// find wheather the year is leap or not
function isLeapYear (year) {
    if (typeof year === 'number') {
        if (year % 400 === 0) {
            return `${year} is a leap year.`
        } else if (year % 100 === 0) {
            return `${year} is not a leap year.`
        } else {
            return `${year} is a leap year.`
        }
    }
    return `Please Enter a valid number`
}
const year = 2000
const result5 = isLeapYear(year)
console.log(result5);


// check if the character is uppercase, lowercase, digit or special character
// special characters range: 33-47 && 58-64 && 91-96 && 123-126
// digits characters range: 48-57
// uppercase characters range: 65-90
// lowercase characters range: 97-122
function checkCharacterType (char) {
    const asciiCode = char.charCodeAt()
    if ((asciiCode >= 33 && asciiCode <= 47) || (asciiCode >= 58 && asciiCode <= 64) || (asciiCode >= 91 && asciiCode <= 96) || (asciiCode >= 123 && asciiCode <= 126)) {
        return `${char} is character`        
    } else if ((asciiCode >= 48 && asciiCode <= 57)) {
        return `${char} is digits` 
    } else if ((asciiCode >= 65 && asciiCode <= 90)) {
        return `${char} is upper case` 
    } else if ((asciiCode >= 97 && asciiCode <= 122)) {
        return `${char} is lower case` 
    }
    return `Valid Type`
}
const char = 'a'
const result6 = checkCharacterType(char)
console.log(result6);


// checking type of triangle
function checkTriangleType (num1, num2, num3) {
    const result = (num1 * num1) + (num2 * num2)
    const num3Result = num3 * num3
    if (result === num3Result) {
        return `Right Angeled Triangle`
    } else if (num1 === num2 && num2 === num3) {
        return `Equilateral Triangle`
    } else if ((num1 === num2 || num1 === num3) || (num2 === num3)) {
        return `Isosceles Triangle`
    } else {
        return `Scalene`
    }
}
const result7 = checkTriangleType(4, 4, 4)
console.log(result7);


// calculate income tax

// 2,50,001 - 5,00,000 => 5%
// 5,00,001 - 10,00,000 => 20%
// Above 10,00,000 => 5%
// function calculateIncomeTax (incomeTax) {
//     let tax = 0
//     if (incomeTax <= 250000) {
//         return tax
//     } else if (incomeTax > 250000 && incomeTax <= 5000000) {
//         tax = (250000 * 0.05) + ((incomeTax - 500000) * 0.2)
//     } else if () {

//     }
// }
// const incomeTax = 750000
// const result8 = calculateIncomeTax(incomeTax)
// // console.log(result8);