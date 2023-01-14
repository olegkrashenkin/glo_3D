const validateForms = () => {
    const calc = document.querySelectorAll('.calc-item')
    const formNames = document.querySelectorAll('.form-name')
    const formNameFooter = document.getElementById('form2-name')
    const formEmails = document.querySelectorAll('.form-email')
    const formMessage = document.getElementById('form2-message')

    calc.forEach(item => {
        if (item.classList.contains('calc-type')) return

        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/g, '')
        })
    })

    formEmails.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^a-z\d@\-_.!~*']/gi, '')
        })
    })

    formNames.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-я\-\s]/gi, '')
        })
    })

    formNameFooter.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я\-\s]/gi, '')
    })

    formMessage.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я\-\s]/gi, '')
    })

}

export default validateForms