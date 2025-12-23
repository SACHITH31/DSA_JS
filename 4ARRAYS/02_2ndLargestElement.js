// finding the 2nd largest element in the list

function secondLargestElement (myArr) {
    console.log(myArr)
    let big = myArr[0]
    let position = null
    for (let i = 0; i < myArr.length; i++) {
        if (big < myArr[i]) {
            big = myArr[i]
            position = i + 1
        }
    }
    // console.log(big, position);
    const updatedArray = []
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] != big) {
            updatedArray.push(myArr[i])
        }
    }
    // console.log(updatedArray)

    let secondLargestElementVariable = updatedArray[0]
    for (let i = 0; i < updatedArray.length; i++) {
        if (secondLargestElementVariable < updatedArray[i]) {
            secondLargestElementVariable = updatedArray[i]
        }
    }
    console.log(secondLargestElementVariable)
}

const myArr = [3, 7, 1, 9, 4]
const result = secondLargestElement(myArr)
