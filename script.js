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

let lowerDisplay= document.querySelector(".lower-display");
let upperDisplay= document.querySelector(".upper-display");

lowerDisplay.textContent = 0;
upperDisplay.textContent = 0;

let prevNum = 0;
let currentNum= 0;
let operator = '';
let displayVal = 0;
let result =0;
let opValue =true;

// Function to populate display
function populateDisplay(num){
    if (lowerDisplay.textContent == "0"){
        lowerDisplay.textContent = null;
    }
        lowerDisplay.textContent = lowerDisplay.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()+num;
        prevNum = parseInt(lowerDisplay.textContent);
        console.log(prevNum);
};

//Function to update the operator
function updateOperator(sign){
    if (opValue == true){
        operator = sign;
        currentNum = prevNum;
        if(upperDisplay.textContent == "0"){
            upperDisplay.textContent = null;
        }
            upperDisplay.textContent =(prevNum+" "+sign+ " ");
            lowerDisplay.textContent = 0;
    }
    else{
        result = operate(operator, currentNum, prevNum);
        console.log(result);
        operator = sign;
        currentNum = result;
        upperDisplay.textContent += (prevNum+" "+sign+ " ");
        lowerDisplay.textContent = 0;
    }
    opValue = false;
};

//Event Listeners for all operation buttons
plusButton.addEventListener('click' ,()=>{
    updateOperator('+');
});
minusButton.addEventListener('click' ,()=>{
    updateOperator('-');
})
multiplyButton.addEventListener('click' ,()=>{
    updateOperator('*');
})
divideButton.addEventListener('click' ,()=>{
    updateOperator('/');
});
    
equalButton.addEventListener('click' ,()=>{
    let x = operate(operator, currentNum, prevNum);
    console.log(x);
    upperDisplay.textContent = Math.round((x + Number.EPSILON) * 100000) / 100000;
    lowerDisplay.textContent = result;
});
allClearButton.addEventListener('click' ,()=>{
    window.location.reload();
});


//Function to operate
function operate(operator, currentNum, prevNum){

    switch (operator) {
        case '+':
            displayVal = prevNum + currentNum;
            break;
        case '-':
            displayVal = currentNum - prevNum;
            break;
        case '*':
            displayVal= currentNum*prevNum;
            break;
        case '/':
           displayVal = currentNum/prevNum;
            break;
    };
    console.log(prevNum, currentNum)
    return displayVal;
    
    
};


/* //Functions for all operations
function addition(prevNum, currentNum){
    let sum = prevNum + currentNum;
    return sum;
};
function subtract(prevNum, currentNum){
    let minus = prevNum - currentNum;
    return minus;
};
function multiply(prevNum, currentNum){
    product = prevNum - currentNum;
    return product;
};
function division(prevNum, currentNum){
    divide = prevNum/currentNum;
    return divide;
}; */


//Event Listeners for number buttons
numOne.addEventListener('click', ()=>{
    populateDisplay(1);
    // lowerDisplay.textContent= numOne.textContent;
})
numTwo.addEventListener('click', ()=>{
    populateDisplay(2);
})
numThree.addEventListener('click', ()=>{
    populateDisplay(3);
})
numFour.addEventListener('click', ()=>{
    populateDisplay(4);
})
numFive.addEventListener('click', ()=>{
    populateDisplay(5);
})
numSix.addEventListener('click', ()=>{
    populateDisplay(6);
})
numSeven.addEventListener('click', ()=>{
    populateDisplay(7);
})
numEight.addEventListener('click', ()=>{
    populateDisplay(8);
})
numNine.addEventListener('click', ()=>{
    populateDisplay(9);
})
numZero.addEventListener('click', ()=>{
    populateDisplay(0);
})
decimalPoint.addEventListener('click', ()=>{
    populateDisplay('.');
})

