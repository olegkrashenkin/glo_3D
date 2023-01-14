const menu = () => {
    const menu = document.querySelector('menu')

    menu.querySelector('.close-btn').addEventListener('click', (e) => e.preventDefault())

    document.body.addEventListener('click', (e) => {
        if ((menu.classList.contains('active-menu') && !e.target.closest('menu')) ||
            e.target.closest('.menu') || e.target.closest('.close-btn') || e.target.closest('menu>ul>li>a')) {
            menu.classList.toggle('active-menu')
        }
    })
}

export default menu