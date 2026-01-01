// Q: Print the numbers from 1 to n
// Input: 5
// Output: 1 2 3 4 5


const datePicker = document.querySelector('.numberPicker')
const submitButton = document.querySelector('.submitButton')
const showResults = document.querySelector('.showResults')

submitButton.addEventListener ('click', () => {
  for (let i = 1; i <= datePicker.value; i++) {
    const li = document.createElement('li')
    li.innerText = i
    showResults.append(li)
  }
})

const num = 2;

{
  console.log("Using for loop");
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

{
  console.log("Using while loop");
  let i = 1;
  while (i <= num) {
    console.log(i);
    i++;
  }
}

{
  console.log("Using do-while loop");
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= num);
}
