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