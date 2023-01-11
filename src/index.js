import timer from './modules/timer'
import menu from './modules/menu'
import smoothScroll from './modules/smoothScroll'
import modal from './modules/modal'
import validateForms from './modules/validateForms'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('26 january 2023')
menu()
smoothScroll()
modal()
validateForms()
tabs()
slider()
calc(100)
sendForm({
    idForm: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})
