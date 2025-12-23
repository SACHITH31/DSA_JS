// finding the largest element in the given array 

function findLargestElement (myArr) {
    let big = myArr[0]
    
    //loop to find the largest element and store it in big 
    for (let i = 0; i < myArr.length; i++) {
        if (big < myArr[i]) {
            big = myArr[i]
        }
    }
    return (`The largest element is: ${big}`)
}

const myArr = [3, 7, 1, 9, 4]
const result = findLargestElement(myArr)
console.log(result);