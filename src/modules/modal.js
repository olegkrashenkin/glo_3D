import { animate } from "./helpers"

const modal = () => {
    const popup = document.querySelector('.popup')
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popupContent = popup.querySelector('.popup-content')

    let widht = document.documentElement.clientWidth >= 768

    window.addEventListener('resize', () => {
        widht = document.documentElement.clientWidth >= 768
    })

    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            if (widht) {
                popup.style.opacity = '0'
                popupContent.style.opacity = '0'
                popup.style.display = 'block'
                animate({
                    duration: 150,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popupContent.style.top = progress * 10 + '%';
                        popupContent.style.opacity = progress
                        popup.style.opacity = progress
                    }
                });
            } else {
                popup.style.display = 'block'
            }
        })
    })

    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            widht = document.documentElement.clientWidth >= 768
            if (widht) {
                animate({
                    duration: 150,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popupContent.style.top = (1 - progress) * 10 + '%';
                        popupContent.style.opacity = 1 - progress
                        popup.style.opacity = 1 - progress
                    }
                });
                setTimeout(() => popup.style.display = 'none', 150)
            } else {
                popup.style.display = 'none'
            }
        }
    })
}

export default modal