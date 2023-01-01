const title = document.getElementById('title')
const today = document.getElementById('today')
const time = document.getElementById('time')
const untilNY = document.getElementById('untilNY')

const date = new Date()
const weekday = date.toLocaleString('ru', { weekday: 'long' })

const timeOfDay = () => {
    const tmp = date.toLocaleString('ru', { hour: 'numeric' })

    switch (true) {
        case tmp < 6:
            return 'Доброй ночи!'

        case tmp < 12:
            return 'Доброе утро!'

        case tmp < 18:
            return 'Добрый день!'

        case tmp >= 18:
            return 'Добрый вечер!'
    }
}

const diffInDays = () => {
    const nextNewYear = new Date(date.getFullYear() + 1, 0, 1)
    return Math.floor((nextNewYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

title.textContent = timeOfDay()
today.textContent = weekday[0].toUpperCase() + weekday.slice(1)
time.textContent = date.toLocaleString('en', { hour: '2-digit', minute: '2-digit', second: 'numeric' })
untilNY.textContent = diffInDays()
