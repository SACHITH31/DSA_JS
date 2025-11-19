let buttons = document.querySelectorAll('.button');
let result = document.querySelector('.result')
let enteredValue;

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        if (button.innerText !== '=') {
            if (button.innerText !== "AC") {
                //while clicking on 1, 2, all except =, Ac
                result.value += button.innerText;
                enteredValue = result.value;
            } else {
                //while clicked on AC
                result.value = ' '
                console.log(`Clicked on: ${button.innerText}`)
                console.log(`Entered Value is: ${enteredValue}`)
            }
        } else if (button.innerText === '='){
            //while clicked on =
            console.log(`Clicked on: ${button.innerText}`)
            console.log(`Entered Value is: ${enteredValue}`)
        }
    })
}

