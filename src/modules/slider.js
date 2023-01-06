const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = sliderBlock.querySelectorAll('.portfolio-item')
    let dots

    const timerVal = 2000

    let currentSlide = 0
    let idInterval

    const prevSlide = (el, idx, activeClass) => {
        el[idx].classList.remove(activeClass)
    }

    const nextSlide = (el, idx, activeClass) => {
        el[idx].classList.add(activeClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        currentSlide++

        if (currentSlide >= slides.length) currentSlide = 0

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')

    }

    const startSlide = (timer = 1500) => {
        idInterval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(idInterval)
    }

    const startListen = () => {
        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault()

            if (!e.target.matches('.dot, .portfolio-btn')) return

            prevSlide(slides, currentSlide, 'portfolio-item-active')
            prevSlide(dots, currentSlide, 'dot-active')

            if (e.target.matches('#arrow-right')) {
                currentSlide++

                if (currentSlide >= slides.length) currentSlide = 0

            } else if (e.target.matches('#arrow-left')) {
                currentSlide--

                if (currentSlide < 0) currentSlide = slides.length - 1

            } else if (e.target.classList.contains('dot')) {
                dots.forEach((item, idx) => {
                    if (e.target === item) currentSlide = idx
                })
            }

            nextSlide(slides, currentSlide, 'portfolio-item-active')
            nextSlide(dots, currentSlide, 'dot-active')
        })

        sliderBlock.addEventListener('mouseenter', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) stopSlide()
        }, true)

        sliderBlock.addEventListener('mouseleave', (e) => {
            if (e.target.matches('.dot, .portfolio-btn')) startSlide()
        }, true)
    }

    if (slides.length > 1) {
        slides.forEach(() => {
            const newDot = document.createElement('li')
            newDot.classList.add('dot')
            document.querySelector('.portfolio-dots').append(newDot)
        })

        dots = sliderBlock.querySelectorAll('.dot')
        dots[0].classList.add('dot-active')

        startSlide(timerVal)
        startListen()
    } else if (slides.length === 1) {
        document.getElementById('arrow-left').style.display = 'none'
        document.getElementById('arrow-right').style.display = 'none'
    } else {
        document.getElementById('portfolio').style.display = 'none'
        document.querySelectorAll('menu>ul>li')[1].style.display = 'none'
    }
}

export default slider