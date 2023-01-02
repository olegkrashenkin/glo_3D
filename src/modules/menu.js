const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const showMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', showMenu)
    closeBtn.addEventListener('click', showMenu)

    menuItems.forEach(item => item.addEventListener('click', showMenu))
}

export default menu