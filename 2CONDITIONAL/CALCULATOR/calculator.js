// let buttons = document.querySelectorAll('.button');
// let result = document.querySelector('.result');

// for (let button of buttons) {
//     button.addEventListener('click', () => {

//         let value = button.innerText;

//         // AC → clear everything
//         if (value === 'AC') {
//             result.value = '';
//         }

//         // X → delete last character
//         else if (value === 'X') {
//             result.value = result.value.slice(0, -1);
//         }

//         // +/- → toggle positive / negative
//         else if (value === '+/-') {
//             if (result.value) {
//                 result.value = String(-Number(result.value));
//             }
//         }

//         // = → evaluate the entered expression
//         else if (value === '=') {
//             try {
//                 let expression = result.value;

//                 // Replace % with /100 for proper evaluation
//                 expression = expression.replace('%', '/100');

//                 result.value = eval(expression);   // safe for simple calculator
//             } 
//             catch (error) {
//                 result.value = "Error";
//             }
//         }

//         // Add number or operator to screen
//         else {
//             result.value += value;
//         }

//     });
// }


// let buttons = document.querySelectorAll('.button');
// let result = document.querySelector('.result')
// // let enteredValue;

// for (let button of buttons) {
//     button.addEventListener('click', (e) => {
//       if (button.innerText === 'AC') {
//         result.value = ' '
//         console.log("Clicked on Ac")  
//     } else if (button.innerText === 'X') {
//         let temp = result.value
//         temp = temp.slice(0, -1)
//         result.value = temp
//         console.log("Clicked on X")  
//     } else if (button.innerText === '=') {
//         result.value = ' '
//         console.log("Cliced on =")
//     } else {
//         result.value += button.innerText
//     }
//     })
// }


const num1 = 20
const num2 = 10

const operator = prompt("Enter Operator")
switch(operator) {
    case '+': console.log(num1 + num2); break;
    case '-': console.log(num1 - num2); break;
    case '*': console.log(num1 * num2); break;
    case '/': console.log(num1 / num2); break;
    case '%': console.log(num1 % num2); break;
    default: console.log("Enter valid operator.")
}