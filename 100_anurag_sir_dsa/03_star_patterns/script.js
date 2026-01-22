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
        // console.log(temp)
    }
}



{
    // debugger
    for (let i = 1; i <= rows; i++) {
        let temp = ''
        if (i == 1 || i == rows) {
            for (let j = 1; j <= rows; j++) {
                temp += '*'
            }
            console.log(temp);
        } else {
            for (let j = 1; j <= rows; j++) {
                if (j === 1 || j === rows) {
                    temp += '*'
                } else {
                    temp += ' '
                }
            }
            console.log(temp)
        }
    }
}