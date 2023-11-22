const equalsButton = document.querySelector('.equals')
const resultText = document.querySelector('.result')

let num1 = 1
let num2 = 3
let operator = '+'


function add(num1, num2) {
    resultText.textContent = num1 + num2
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

equalsButton.addEventListener('click', () => {
    operate(num1, operator, num2)
}) 

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':

            add(num1, num2)
        break;

        case '-':
            subtract(num1, num2)
        break;

        case 'x':
            multiply(num1, num2)
        break;

        case '/':
            divide(num1, num2)
        break;
    }
    return
}