var inpNum1 = document.querySelector('#numero1')
var inpNum2 = document.querySelector('#numero2')
var inpRes = document.querySelector('#resultado')
var btnSumar = document.querySelector('#btnSumar')
var btnRestar = document.querySelector('#btnRestar')
var btnMultiplicar = document.querySelector('#btnMultiplicar')
var btnDividir = document.querySelector('#btnDividir')
var btnBorrar = document.querySelector('#btnBorrar')
var btnProbar = document.querySelector('#btnProbar')

btnProbar.addEventListener('click', () => {
    let num = Number(inpNum1.value)

    if (num < 10) {
        inpRes.value = 'Unidade'
    } else if (num < 100) {
        inpRes.value = 'Decenas'
    } else if (num < 1000) {
        inpRes.value = 'Centenas'
    } else if (num < 10000) {
        inpRes.value = 'Millar'
    } else {
        inpRes.value = 'Fuera de rango'
    }
})

btnSumar.addEventListener('click', () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)

    inpRes.value = num1 + num2
})

btnRestar.addEventListener('click', () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)

    inpRes.value = num1 - num2
})

btnMultiplicar.addEventListener('click', () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)

    inpRes.value = num1 * num2
})

btnDividir.addEventListener('click', () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)

    inpRes.value = num1 / num2
})

btnBorrar.addEventListener('click', () => {
    inpNum1.value = ''
    inpNum2.value = ''
    inpRes.value = ''
})

