// return indices of two numbers whose sum is equal to target.

function twoSum (myArr, target) {
    const result = []
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] + myArr[i + 1] === target) {
            result.push(i, i + 1)
        }
    }
    console.log(result)
}

const myArr = [3, 2, 4]
const target = 6
twoSum(myArr, target)
