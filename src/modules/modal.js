const modal = () => {
    const popup = document.querySelector('.popup')
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popupContent = popup.querySelector('.popup-content')
    const closeBtn = popup.querySelector('.popup-close')
    let widht = document.documentElement.clientWidth >= 768

    let idAnim
    let top = -70
    let open

    const popupAnim = () => {
        idAnim = requestAnimationFrame(popupAnim)

        if (open) {
            if (top < 10) {
                top += 3
                popupContent.style.top = top + '%'
            } else {
                cancelAnimationFrame(idAnim)
            }
        } else {
            if (top > -70) {
                top -= 3
                popupContent.style.top = top + '%'
            } else {
                cancelAnimationFrame(idAnim)
                popup.style.display = 'none'
            }
        }
    }

    window.addEventListener('resize', () => {
        widht = document.documentElement.clientWidth >= 768
    })

    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            if (widht) {
                open = true
                popupAnim()
            } else {
                popupContent.style.top = '10%'
            }

            popup.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        widht = document.documentElement.clientWidth >= 768
        if (widht) {
            open = false
            popupAnim()
        } else {
            popup.style.display = 'none'
        }
    })

}

export default modal