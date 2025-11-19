const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result')

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        if (button.innerText !== '=') {
            result.value += button.innerText;
        }
    })
}