// Q: Print the numbers from 1 to n
// Input: 5
// Output: 1 2 3 4 5

const num = Number(prompt("Enter number to print the sequence: "));

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
