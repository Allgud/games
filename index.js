const modal = document.querySelector('.play__modal')
const gameButtons = document.querySelectorAll('.play__description .button')
const closeBtn = document.querySelectorAll('.close-btn')

const showModal = () => modal.classList.add('modal--open')

for(let i = 0; i < gameButtons.length; i++){
    gameButtons[i].addEventListener("click", e => {
        e.preventDefault()
        showModal()
    })
}

closeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const parent = e.target.parentNode
        if(parent.classList.contains('modal--open')){
            parent.classList.remove('modal--open')
        }
    })
})