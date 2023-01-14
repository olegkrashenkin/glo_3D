const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.style.color = 'white'
        statusBlock.textContent = loadText
        form.append(statusBlock)

        form.querySelectorAll('input').forEach(el => el.value = '')

        formData.forEach((v, k) => {
            if (v) formBody[k] = v
        });

        someElem.forEach(el => {
            const element = document.getElementById(el.id)

            if (el.type === 'block' && element.textContent != '0') {
                formBody[element.id] = element.textContent
            } else if (el.type === 'input') {
                formBody[element.id] = element.value
            }
        })

        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
            .finally(
                setTimeout(() => {
                    statusBlock.textContent = ''
                }, 3000)
            )
    }

    try {
        // if (!form) throw new Error('Потерялась форма')

        form.addEventListener('submit', (e) => {
            console.log(e);

            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm