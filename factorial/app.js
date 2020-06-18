const calcFactorial = (num) => {
    if (num === 1) {
      return 1;
    } else {
      return num * calcFactorial(num - 1);
    }
  };
  
  console.log(calcFactorial(5));
  
  //console.log(calcFactorial(10));
  
  //console.log(calcFactorial(8));