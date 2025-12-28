let a = [[1, -2], [-3]]

let counter = 0

for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    counter = counter + 1
  }
  else {
    if (a[i].length > 0 && !(a[i] >= 0)) {
      // console.log(`The subarray length is: ${a[i]}`)
      subArray(a[i])
    } else {
      if (a[i] >= 0) {
        continue
      }
    }
  }
}

function subArray (myArr) {
  let arr = myArr
  // console.log(arr)
  // console.log(arr.length)
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // console.log(`The element is: ${arr[i]}`)
      counter = counter + 1
    } else {
      if (arr[i].length > 0 && !(arr[i].length === 0)) {
        subArray(arr[i])
      }
    }
  }
}

console.log(counter)
