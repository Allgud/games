const gameBtns = document.querySelectorAll('.play__button')
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']

const shuffleArray = arr => {
    const newArr = arr.slice()
    return newArr.sort(() => Math.random() - 0.5)
}

const getSeason = () => {
    const userNum = prompt('Введите число от 1 до 12')
    if(userNum > 12){
        alert("Нет столько месяцев в году, баклан!")
        return
    }

    if(userNum < 1 || userNum === ''){
        alert('Пожалуйста, введите число от 1 до 12')
        return
    }

    if(userNum == 12 || userNum == 1 || userNum == 2){
        alert('Зима')
        return
    }

    if(userNum >= 3 && userNum <= 5){
        alert('Весна')
        return
    }

    if(userNum >= 6 && userNum <= 8){
        alert("Лето")
        return
    }

    if(userNum >= 9 && userNum <= 11){
        alert("Осень")
        return
    }
}

const rememberWords = () => {
  const arr = shuffleArray(fruits)
  alert(arr.join(' , '))
  let firstWord = arr[0].toLowerCase()
  let lastWord = arr[arr.length - 1].toLowerCase()
  let answer1 = prompt(`Какое слово было первым в списке?`)
  answer1 = answer1.toLowerCase().trim()
  let answer2 = prompt(`Какое слово было последним в списке?`)
  answer2 = answer2.toLowerCase().trim()

  if(answer1 === firstWord && answer2 === lastWord){
      alert('Всё верно!')
      return
  }

  if(answer1 === firstWord && answer2 !== lastWord || answer1 !== firstWord && answer2 === lastWord){
      alert('Вы были близки')
      return
  }

  if(answer1 !== firstWord && answer2 !== lastWord){
      alert('Все ответы неверны')
      return
  }
}

const getRiddle = (num = 2) => {
    const question = `Больше часа, меньше минуты`
    const answer = 'секунда'
    let tries = num 
  
    let userAnswer = prompt(question)

    if(userAnswer.toLowerCase().trim() === answer){
        alert('Победа!')
        return
    }

    if(userAnswer.toLowerCase().trim() !== answer){
        if(tries === 0){
            alert('Попытки закончились! Ты проиграл!')
            return
        }
        alert(`Неверно! Осталось ${num} попытки`)
            getRiddle(tries - 1)
    }
}

gameBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault()
        const parent = e.target.parentNode
        const title = parent.querySelector('.play__title').innerText
        switch(title){
            case 'Времена года!': {
                getSeason()
                break;
            }
            case 'Запомни слова' : {
                rememberWords()
                break;
            }
            case 'Игра в загадки' : {
                getRiddle()
                break;
            }
        }
    })
})