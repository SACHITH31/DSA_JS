let range = 4

let startingLetter = 96

for (let i = 1; i <= range; i++) {
  let row = ''
  for (let j = 1; j <= i; j++) {
    let temp = startingLetter + j
    temp = String.fromCharCode(temp)
    row += temp
  }
  for (let k = (i -1); k >= 1; k--) {
    let temp = startingLetter + k
    temp = String.fromCharCode(temp)
    row += temp
  }
  console.log(row)
}
