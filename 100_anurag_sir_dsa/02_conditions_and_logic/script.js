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

const result = largestOf3Numbers(102, 20, 511)
console.log(result);
