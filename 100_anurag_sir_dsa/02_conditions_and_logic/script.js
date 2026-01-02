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
    } else {
        return `Please Enter Valid Character`
    }
}
const myChar = 'a'
const result4 = checkVowelOrConsonant(myChar)
console.log(result4);