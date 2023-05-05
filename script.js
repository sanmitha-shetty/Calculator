//Declaring variables to the buttons
const numOne = document.querySelector(".num-1");
const numTwo = document.querySelector(".num-2");
const numThree = document.querySelector(".num-3");
const numFour = document.querySelector(".num-4");
const numFive = document.querySelector(".num-5");
const numSix = document.querySelector(".num-6");
const numSeven = document.querySelector(".num-7");
const numEight = document.querySelector(".num-8");
const numNine = document.querySelector(".num-9");
const numZero = document.querySelector(".num-0");
const decimalPoint = document.querySelector(".point");

const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const equalButton = document.getElementById("equal");
const allClearButton = document.getElementById("all-clear");

const numButton = document.querySelectorAll('.numButton');
const opButton = document.querySelectorAll('.opButton');

let lowerDisplay= document.querySelector(".lower-display");
let upperDisplay= document.querySelector(".upper-display");

let prevNum = 0;
let currentNum= 0;
let operator = null;
let displayVal = 0;

console.log(equalButton.textContent)

//Event Listeners for all operation buttons
plusButton.addEventListener('click' ,()=>{
    operator = '+';
    console.log(operator);
});
minusButton.addEventListener('click' ,()=>{
    operator = '-';
    console.log(operator);
})
multiplyButton.addEventListener('click' ,()=>{
    operator = '*';
    console.log(operator);
})
divideButton.addEventListener('click' ,()=>{
    operator = '/';
    console.log(operator);
})
equalButton.addEventListener('click' ,()=>{
    operate(operator);
})
allClearButton.addEventListener('click' ,()=>{
    window.location.reload();
})
console.log(operator);

//Function to operate
function operate(operator, prevNum, currentNum){
    prevNum = parseInt(prevNum);
    currentNum = parseInt(currentNum);
    switch (operator) {
        case '+':
        displayVal = (addition(prevNum, currentNum));
            break;
        case '-':
            displayVal =(subtract(prevNum, currentNum));
            break;
        case '*':
            displayVal = (multiply(prevNum, currentNum));
            break;
        case '/':
           displayVal= (division(prevNum, currentNum));
            break;
    };
    lowerDisplay.textContent = displayVal;
};

console.log(operate());

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

//Event Listeners for number buttons
numOne.addEventListener('click', ()=>{
    lowerDisplay.textContent = numOne.textContent;
})
numTwo.addEventListener('click', ()=>{
    lowerDisplay.textContent = numTwo.textContent;
})
numThree.addEventListener('click', ()=>{
    lowerDisplay.textContent = numThree.textContent;
})
numFour.addEventListener('click', ()=>{
    lowerDisplay.textContent = numFour.textContent;
})
numFive.addEventListener('click', ()=>{
    lowerDisplay.textContent = numFive.textContent;
})
numSix.addEventListener('click', ()=>{
    lowerDisplay.textContent = numSix.textContent;
})
numSeven.addEventListener('click', ()=>{
    lowerDisplay.textContent = numSeven.textContent;
})
numEight.addEventListener('click', ()=>{
    lowerDisplay.textContent = numEight.textContent;
})
numNine.addEventListener('click', ()=>{
    lowerDisplay.textContent = numNine.textContent;
})
numZero.addEventListener('click', ()=>{
    lowerDisplay.textContent = numZero.textContent;
})
decimalPoint.addEventListener('click', ()=>{
    lowerDisplay.textContent = decimalPoint.textContent;
})