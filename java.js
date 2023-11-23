const screenSum = document.querySelector('.screen-sum')
const screenResult = document.querySelector('.screen-result')
const buttonContainer = document.querySelector('.button-container')
const numberbutton = document.querySelector('.number')

let num1 = ''
let num2 = ''
let operator = ''
result = 'nothing'

buttonContainer.addEventListener('mousedown', mouseDwn, false)
buttonContainer.addEventListener('mouseup', mouseUp, false)

buttonContainer.addEventListener('click', handleClick, false)

function mouseDwn(e){
    const { target } = e  
    target.classList.add('mousedown')
}

function mouseUp(e){
    const { target } = e  
    target.classList.remove('mousedown')
}

function handleClick(e) {
    const { target } = e    

    if (target.classList.contains('number')) {
        if (result !=='' && operator == ''){
            fullReset()
            
        }
        if (operator == ''){
            num1 += target.id
        }
        else {
            num2 += target.id
        }
    }

    else if (target.classList.contains('decimal')) {
        if (num1 !== '' && operator =='') {
            if (num1.includes(target.id)) {
                return
            }
            else{
            num1 += target.id
            }
        }
        else if (operator !== '') {
            if (num2.includes(target.id)){
                return
            }
            else {
            num2 += target.id
            }
        }
    }

    else if (target.classList.contains('operator')) {
        if (operator == '' && num1 !== ''){
            operator = target.id
        }
        else if (operator !== '' && num2 !== '' ){
            operate(num1, operator, num2)
        }
        else {
            num1 = result 
            operator = target.id
            screenSum.textContent = `${num1} ${operator} ${num2}`
        }
    }

    else if (target.classList.contains('equals')) {
        if (num1 !=='' && num2 !==''){
            operate(num1, operator, num2)
        }
        else {
            return
        }

    }

    else if (target.classList.contains('delete')) {
        if (num1 == '' && operator == '' && num2 ==''){
            return
        }
        else if (num2 !== ''){
            num2 = num2.slice(0, -1)
        }
        else if (num2 =='' && operator !== ''){
            operator = ''
        }
        else if (num2 =='' && operator ==''){
            num1 = num1.slice(0, -1)
            screenSum.textContent = `${num1} ${operator} ${num2}`
        }
    }

    else if (target.classList.contains('clear')) {
        fullReset()
    }
    if (num1==''){
        return
    }
    else {
        screenSum.textContent = `${num1} ${operator} ${num2}`
    }

}

function add(num1, num2) {
    result = Number(num1) + Number(num2)
    screenResult.textContent = parseFloat((result).toFixed(5))
    reset()
    return
}

function subtract(num1, num2) {
     result = Number(num1) - Number(num2)
     screenResult.textContent = parseFloat((result).toFixed(5))
    reset()
    return
}

function multiply(num1, num2) {
    result = Number(num1) * Number(num2)
    screenResult.textContent = parseFloat((result).toFixed(5))
    reset()
    return
}

function divide(num1, num2) {
    if (num2 == 0) {
        screenResult.textContent = 'Cant Divide By Zero'
    }
    else{
    result = Number(num1) / Number(num2)
    screenResult.textContent = parseFloat((result).toFixed(5))
    }
    reset()
    return 
}

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

function reset() {
    num1 = ''
     num2 = ''
     operator = ''
     
}

function fullReset() {
    num1 = ''
    operator = ''
    num2 = ''
    result = ''
    screenResult.textContent = '0'
    screenSum.textContent = ''
    return
}