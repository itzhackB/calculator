
function getInput() {
    return document.getElementById('input').innerText;
}

function setInput(value) {
    document.getElementById('input').innerText = value;
}

let firstNumber;
let operator;
let secondNumber;
function addOperator(currentOperator) {
    firstNumber = Number(getInput());
    operator = currentOperator;
    setInput(currentOperator)
}

function calculate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        return firstNumber + secondNumber;
    }
    if (operator === '-') {
        return firstNumber - secondNumber;
    }
    if (operator === '*') {
        return firstNumber * secondNumber;
    }
    if (operator === '/') {
        return firstNumber / secondNumber;
    }
}

function equals() {
    secondNumber = Number(getInput());
    let calculatedValue = calculate(firstNumber, secondNumber, operator);
    setInput(calculatedValue);
}

function addInput(number) {
    var currentInput = getInput();

    var newInput;

    
    if (['+', '-', '=', '/', '*'].includes(currentInput)) {
        newInput = `${number}`;
    }
    else {
        newInput = `${currentInput}${number}`;
    }
    var sanitzeInput = newInput === '0' ? 0 : removeFirstZero(newInput);
    setInput(sanitzeInput)
}

function removeFirstZero(input) {

    if (input[0] === "0" && input[1] !== ".") {
        return input.substring(1);
    }

    
    if (input[input.length - 1] === "." && input[input.length - 2] === ".") {
        return input.slice(0, -1);
    }
    return input;
}

