const number = 5
const endingRange = 10

for(let i = 1; i <= endingRange; i++) {
    let result = String(number * i);
    if (result.length === 1) {
        console.log(`${number} X ${i} = 0${number * i}`)
    } else {
        console.log(`${number} X ${i} = ${number * i}`)
    }
}
