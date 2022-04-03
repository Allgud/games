const gameBtns = document.querySelectorAll('.play__button');

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']

const fourSeasons = () => {
    const userNum = prompt('Введите число от 1 до 12')
    if(userNum > 12){
        alert("Нет столько месяцев в году, баклан!")
    }
    if(userNum < 1 || userNum === ''){
        alert('Пожалуйста, введите число от 1 до 12')
    }
    if(userNum == 12 || userNum == 1 || userNum == 2){
        alert('Зима')
    }else if(userNum == 3 || userNum == 4 || userNum == 5){
        alert('Весна')
    }else if(userNum == 6 || userNum == 7 || userNum == 8){
        alert("Лето")
    }else if(userNum == 9 || userNum == 10 || userNum == 11){
        alert("Осень")
    }
}

const rememberWords = () => {
  words = shuffleArray(words)
  alert(words.join(' , '))
  let firstWord = words[0].toLowerCase()
  let lastWord = words[words.length - 1].toLowerCase()
  let answer1 = prompt(`Какое слово было первым в списке?`)
  answer1 = answer1.toLowerCase()
  let answer2 = prompt(`Какое слово было последним в списке?`)
  answer2 = answer2.toLowerCase()
  if(answer1 === firstWord && answer2 === lastWord){
      alert('Всё верно!')
  }else if(answer1 === firstWord && answer2 !== lastWord || answer1 !== firstWord && answer2 === lastWord){
      alert('Вы были близки')
  }else if(answer1 !== firstWord && answer2 !== lastWord){
      alert('Все ответы неверны')
  }
}

gameBtns.forEach((btn,i) => {
    btn.addEventListener("click", e => {
        e.preventDefault()
        const parent = e.target.parentNode
        const title = parent.querySelector('.play__title').innerText
        switch(title){
            case 'Времена года!': {
                fourSeasons()
                break;
            }
            case 'Запомни слова' : {
                rememberWords()
                break;
            };
        }
    })
})