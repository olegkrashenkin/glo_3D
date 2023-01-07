const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = document.getElementById('total')

    let idInterval

    const countCalc = () => {
        const calcTypeVal = +calcType.options[calcType.selectedIndex].value
        const calcSquareVal = +calcSquare.value
        let calcCountVal = 1
        let calcDayVal = 1
        let result

        if (calcCount.value > 1) {
            calcCountVal += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayVal = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayVal = 1.5
        }

        if (calcType.value && calcSquare.value) {
            result = price * calcTypeVal * calcSquareVal * calcCountVal * calcDayVal
            idInterval = setInterval(showTotal, 60, result)
        } else {
            total.textContent = 0
        }
    }

    const showTotal = (input) => {
        const count = 10 ** ((input - total.textContent).toString().length - 1)

        if (input === +total.textContent) {
            clearInterval(idInterval)
        } else if (input > +total.textContent) {
            total.textContent = +total.textContent + count
        } else {
            total.textContent = +total.textContent - count
        }
    }

    calcBlock.addEventListener('input', (e) => {
        clearInterval(idInterval)
        countCalc()
    })

}

export default calc