import { animate } from "./helpers"

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = document.getElementById('total')

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
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.textContent = Math.round(result * progress)
                }
            });
        } else {
            total.textContent = 0
        }
    }


    calcBlock.addEventListener('input', (e) => {
        countCalc()
    })
}

export default calc