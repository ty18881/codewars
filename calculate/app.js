// INPUT:  two operands and an operator; the operands are assumed to be numbers.
// OUTPUT:  the correct calculation

const calcAnswer = (input1, input2, operator) => {

    let theAnswer = 0;

    switch(operator) {
        case "+":
            theAnswer = input1 + input2;
            break;
        case "-":
            theAnswer = input1 - input2;
            break;
        case "*":
            theAnswer = input1 * input2;
            break;
        case "/":
            if (input2 === 0) {
                theAnswer = 'Division by zero is not permitted'
            } else {
                theAnswer =  input1 / input2;
            }  
            break;
    }

    return theAnswer;
}

console.log(calcAnswer(1,2, '+'));
console.log(calcAnswer(1,0, '/'));