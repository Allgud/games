const modals = document.querySelectorAll('.play__modal')
const gameButtons = document.querySelectorAll('.play__description .button')
const closeBtn = document.querySelectorAll('.close-btn')

const getElement = cls => {
    const element = document.querySelector(cls)
    return element
} 

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

const showModal = num => {
    const modal = getElement(`.modal--${num}`)
    modal.classList.add('modal--open')
}

for(let i = 0; i < gameButtons.length; i++){
    gameButtons[i].addEventListener("click", e => {
        e.preventDefault()
        showModal(i + 1)
    })
}

closeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const parent = e.target.parentNode
        parent.classList.remove('modal--open')
    })
})

const fourSeasons = () => {
    const modalSubmit = getElement('.modal-1__submit')
    const modalInput = getElement('.modal__input')
    const modalOutput = getElement('.output--1')
    modalInput.addEventListener('change', e => {  
        const {value} = e.target
        if(value < 1 || value > 12 || value === ""){
            modalSubmit.classList.add('disabled')
            modalOutput.textContent = 'Введите число от 1 до 12'
            setTimeout(() => window.location.reload(), 1500)    
        }
        if(value == 12 || value == 1 || value == 2) {
            modalOutput.textContent = "Зима"
        }else if(value == 3 || value == 4 || value == 5){
            modalOutput.textContent = "Весна"
        }else if(value == 6 || value == 7 || value == 8){
            modalOutput.textContent = "Лето"
        }else if(value == 9 || value == 10 || value == 11){
            modalOutput.textContent = "Осень"
        }

        modalInput.value = ''
    })
    modalSubmit.addEventListener('click', e => {
        e.preventDefault()
        if(modalInput.value === ''){
            modalOutput.textContent = "Значение должно быть заполнено"
        }
    })
}

const rememberWords = () => {
    const list = getElement('.modal__list')
    const modalSubmit = getElement('.modal-2__submit')
    const text = getElement('.text--2')
    const textInput = getElement('.modal__text-input')
    const question1 = `Какое слово было первым в списке?`
    const question2 = `Какое слово было последним в списке?`
    const answers = []
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    words = shuffleArray(words)
    for(let i = 0; i < words.length; i++){
        let span = document.createElement('span')
        span.textContent = `${words[i]} `
        list.append(span)
    }
    modalSubmit.addEventListener('click', e => {
        e.preventDefault()
        list.style.visibility = 'visible'
        setTimeout(() => {
            list.style.visibility = "hidden" 
        }, 3000)
        setTimeout(() => {
            text.textContent = `${question1}`
        }, 4000)
    })
}
fourSeasons()
rememberWords()