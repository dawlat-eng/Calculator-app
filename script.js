
let currentInput = '';
let operator = '';
let firstOperand = null;

function updateScreen() {
    document.getElementById('screen').innerText = currentInput || '0';
}

function appendNumber(number) {
currentInput += number;
updateScreen();
}

function appendOperator(op) {
    if(currentInput=== '') return;
    
    if(firstOperand===null){
        firstOperand = parseFloat(currentInput);
    } else if (operator){
        calculate();
    }

    operator = op;
    currentInput = '';
}

function calculate() {
    if(firstOperand === null || currentInput === '') return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+' :
                result = firstOperand + secondOperand;
             break;
         case '-':
                result = firstOperand - secondOperand;
             break;
         case '*':
                 result = firstOperand * secondOperand;
             break;
        case '/':
                result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    firstOperand = null;
    oper = '';
    updateScreen();
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateScreen();
}

function deletLast() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}


