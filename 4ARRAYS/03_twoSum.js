// return indices of two numbers whose sum is equal to target.

function twoSum (myArr, target) {
    const result = []
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j <= myArr.length; j++) {
            if (myArr[i] + myArr[j] === target) {
                result.push([i, j])
            }
        }
    }
    console.log(result)
}

const myArr = [5, 1, 3, 7]
const target = 8
twoSum(myArr, target)
