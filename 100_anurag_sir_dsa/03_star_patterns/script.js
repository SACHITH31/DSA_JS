const rows = 5;
{
  for (let i = 0; i < rows; i++) {
    let temp = "";
    for (let j = 0; j <= i; j++) {
      temp += "*";
    }
    // console.log(temp);
  }
}


{
    for (let i = rows; i >= 1; i--) {
        let temp = ''
        for (let j = 0; j < i; j++) {
            temp += '*'
        }
        // console.log(temp)
    }
}


// pyramid pattern
{
    for (let i = 1; i <= rows; i++) {
        let temp = ''
        for (let j = 1; j <= rows - i; j++) {
            temp += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            temp += '*'
        }
        // console.log(temp)
    }
}


// inverse pyramid pattern
{
    for (let i = rows; i >= 1; i--) {
        let temp = ''
        for (let j = 1; j <= rows - i; j++) {
            temp += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            temp += '*'
        }
        console.log(temp)
    }
}