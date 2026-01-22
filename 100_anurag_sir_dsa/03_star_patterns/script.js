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
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += "*";
    }
    // console.log(temp)
  }
}

// pyramid pattern
{
  for (let i = 1; i <= rows; i++) {
    let temp = "";
    for (let j = 1; j <= rows - i; j++) {
      temp += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      temp += "*";
    }
    // console.log(temp)
  }
}

// inverse pyramid pattern
{
  for (let i = rows; i >= 1; i--) {
    let temp = "";
    for (let j = 1; j <= rows - i; j++) {
      temp += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      temp += "*";
    }
    // console.log(temp)
  }
}

{
  // debugger
  for (let i = 1; i <= rows; i++) {
    let temp = "";
    if (i == 1 || i == rows) {
      for (let j = 1; j <= rows; j++) {
        temp += "*";
      }
    } else {
      for (let j = 1; j <= rows; j++) {
        if (j === 1 || j === rows) {
          temp += "*";
        } else {
          temp += " ";
        }
      }
    //   console.log(temp);
    }
  }
}

{
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }

    if (i === 1 || i === rows) {
      for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
      }
    } else {
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    // console.log(str);
  }
}



{
  for (let i = rows; i >= 1; i--) {
    let str = "";

    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }

    if (i === 1 || i === rows) {
      for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
      }
    } else {
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    console.log(str);
  } 
}