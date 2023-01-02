const smoothScroll = () => {
    const menuItems = document.querySelectorAll('menu>ul>li>a')
    const nextBlockBtn = document.querySelector('main>a')

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            console.dir(event.target.getAttribute('href'))
            const id = event.target.getAttribute('href').slice(1)

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })

    nextBlockBtn.addEventListener('click', (event) => {
        event.preventDefault()

        const id = event.path[1].getAttribute('href').slice(1)

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

export default smoothScroll