const fibonacci = (number) => {
    let previousNumber = 0,
        currentNumber =1;
    if (number<0){
      return "OOPS";
    } else {
      for (let i =1; i <number; i++){
        let temp=currentNumber;
        currentNumber += previousNumber;
        previousNumber=temp;
      }
      return currentNumber;
    } 
  };


  
// Do not edit below this line
module.exports = fibonacci;
