// well we can see the how much time does the execution is happening to know that we use console.time() that's it no more nothing to be kept in this and we have to keep the console.timeEnd() at the last to know how much time it has taken to complete our particular task
// and i think we have to use the console.timeEnd() only 1 time i think
console.time();

const datePicker = document.querySelector(".numberPicker");
const submitButton = document.querySelector(".submitButton");
const showResults = document.querySelector(".showResults");

submitButton.addEventListener("click", () => {
  const temp = datePicker.value;
  for (let i = temp; i >= 1; i--) {
    const li = document.createElement("li");
    li.innerText = i;
    showResults.append(li);
  }
  console.timeEnd();
});

const evenSubmitButton = document.querySelector(".evenSubmitButton");
evenSubmitButton.addEventListener("click", () => {
  const temp = datePicker.value;
  for (let i = 1; i <= temp; i++) {
    if (i % 2 == 0) {
      const li = document.createElement("li");
      li.innerText = i;
      showResults.append(li);
    }
  }
  console.timeEnd();
});

const showSumButton = document.querySelector(".showSumButton");
showSumButton.addEventListener("click", () => {
  const temp = datePicker.value;
  const p = document.createElement("p");
  let sum = 0;
  for (let i = 1; i <= temp; i++) {
    sum = sum + i;
  }
  p.innerText = `The sum of 1 to ${temp} is: ${sum}`;
  showResults.append(p);
  console.timeEnd();
});
