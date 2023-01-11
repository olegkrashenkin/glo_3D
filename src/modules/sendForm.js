const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm)

    const sendData = async (data) => {
        return await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        const formBody = {}

        formData.forEach((v, k) => {
            formBody[k] = v
        });

        someElem.forEach(el => {
            const element = document.getElementById(el.id)

            if (el.type === 'block') {
                formBody[element.id] = element.textContent
            } else if (el.type === 'input') {
                formBody[element.id] = element.value
            }
        })

        sendData(formBody).then(data => console.log(data))
    })


}

export default sendForm