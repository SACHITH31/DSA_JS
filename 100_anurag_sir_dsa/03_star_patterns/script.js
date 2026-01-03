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
        console.log(temp)
    }
}