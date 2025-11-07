//printing odd numbers from 0 to specified range
const range = 10
for (let i = 0; i <= range; i++) {
    if (!(i % 2 === 0)) {
        console.log(`${i} is odd number.`)
    }
}