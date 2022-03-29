// memperbarui layar tampilan
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//mengambil angka saat menekan tombol
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// variable untuk melakukan kalkulasi
let prevNumber = ''             // menyimpan 2 angka
let calculationOperator = ''    // menyimpan 1 operator
let currentNumber = '0'         // nilai awal harus 0

// mengaktifkan penginputan angka lebih dari 2 digit
const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// mengaktifkan operator
const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// mengaktifkan fungsi kalkulasi (=)
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// mendefinisikan 4 pola dalam kalkulasi
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

// mengaktifkan fungsi tombol AC
const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}