let buttons = document.querySelectorAll('.button');
let result = document.querySelector('.result')
// let enteredValue;

for (let button of buttons) {
    button.addEventListener('click', (e) => {
      if (button.innerText === 'AC') {
        result.value = ' '
        console.log("Clicked on Ac")  
    } else if (button.innerText === 'X') {
        let temp = result.value
        temp = temp.slice(0, -1)
        result.value = temp
        console.log("Clicked on X")  
    } else if (button.innerText === '=') {
        result.value = ' '
        console.log("Cliced on =")
    } else {
        result.value += button.innerText
        // console.log(typeof (result.value += button.innerText))
    }
    })
}

