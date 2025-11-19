//prime number 
let counter = 0
function isPrime (myNum) {
    for (let i = 1;i <= myNum; i++) {
        if (myNum % i === 0) {
            counter += 1
        }
    }
    if (counter === 2) {
        console.log(`${myNum} is prime number`)
    } else {
        console.log(`${myNum} is not prime number`)
    }
}
const myNum = 2
isPrime(myNum)