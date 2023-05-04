
//Function to operate
function operate(operator){
    let prevNum = 10;
    let currentNum = 5;
    prevNum = parseInt(prevNum);
    currentNum = parseInt(currentNum);
    switch (operator) {
        case '+':
        currentResult = (addition(prevNum, currentNum));
            break;
        case '-':
            currentResult =(subtract(prevNum, currentNum));
            break;
        case '*':
            currentResult = (multiply(prevNum, currentNum));
            break;
        case '/':
           currentResult= (division(prevNum, currentNum));
            break;
    };
    return currentResult;
};

//console.log(operate('/'));

//Functions for all operations
function addition(prevNum, currentNum){
    let sum = prevNum + currentNum;
    return (sum);
};
function subtract(prevNum, currentNum){
    let minus = prevNum - currentNum;
    return minus;
};
function multiply(prevNum, currentNum){
    product = prevNum*currentNum;
    return product;
};
function division(prevNum, currentNum){
    divide = prevNum/currentNum;
    return divide;
};
//console.log(addition(10,5),subtract(10,5), multiply(10,5), division(10,5));
