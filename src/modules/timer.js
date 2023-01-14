const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaning = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaning = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaning / 60 / 60 / 24)
        let hours = Math.floor((timeRemaning / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaning / 60) % 60)
        let seconds = Math.floor(timeRemaning % 60)

        return { timeRemaning, days, hours, minutes, seconds }
    }

    const showDays = () => {
        const spanDays = document.createElement('span')

        spanDays.id = 'timer-days'
        document.getElementById('timer').prepend(spanDays)
    }

    const updateClock = () => {
        const getTime = getTimeRemaning()
        const zeroFirst = (arg) => `0${arg}`.slice(-2)
        const timerDays = document.getElementById('timer-days')

        if (getTime.timeRemaning > 0) {
            timerDays.textContent = zeroFirst(getTime.days) + 'д :'
            timerHours.textContent = zeroFirst(getTime.hours) + 'ч'
            timerMinutes.textContent = zeroFirst(getTime.minutes) + 'м'
            timerSeconds.textContent = zeroFirst(getTime.seconds) + 'с'
        } else {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(updateClock)
        }
    }

    showDays()
    updateClock()
    setInterval(updateClock, 1000)
}

export default timer