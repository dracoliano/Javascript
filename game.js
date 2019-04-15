(function (){
  let victories = 0
  let defeats = 0
  let draws = 0

  const options = [
    'rock',
    'paper',
    'lizard',
    'scissors',
    'spock'
  ]
  
  takeID = id => document.getElementById(id)

  takeID('clearButton').onclick = () => location.reload()

  resultIA = () => options[Math.floor(Math.random() * options.length)]

  choices = () => {
      takeID('rock').onclick = () => {
        choicePlayer = 'rock'
        loadChoices()
    }
      takeID('paper').onclick = () => {
        choicePlayer = 'paper'
        loadChoices()
    }
      takeID('lizard').onclick = () => {
        choicePlayer = 'lizard'
        loadChoices()
    }
      takeID('scissors').onclick = () => {
        choicePlayer = 'scissors'
        loadChoices()
    }
      takeID('spock').onclick = () => {
        choicePlayer = 'spock'
        loadChoices()
    }
  }
  loadChoices = () => {
    choiceIA = resultIA()
    takeID('choiceIA').src = `img/${choiceIA}.png` 
    takeID('choiceIA').style.transform = "scaleX(-1)"
    takeID('choicePlayer').src = `img/${choicePlayer}.png`
    takeID('displayOptions').style.display = 'none'
    takeID('playAgain').style.display = 'block'
    takeID('resultGame').style.display = 'block'
    takeID('clearButton').style.display = 'block'
    takeID('score').style.display = 'block'
    result()
  }
  takeID('playAgain').onclick = () => {
    takeID('displayOptions').style.display = 'block'
    takeID('playAgain').style.display = 'none'
    takeID('resultGame').style.display = 'none'
    takeID('clearButton').style.display = 'none'
    takeID('score').style.display = 'none'
    takeID('result').innerHTML = null
    document.body.style.backgroundColor = '#9398ff'

  }

  result = () => {
    draw = choicePlayer === choiceIA
    playerWin = 
      choicePlayer =='rock' && choiceIA == 'scissors' || 
      choicePlayer == 'rock' && choiceIA == 'lizard' ||

      choicePlayer == 'paper' && choiceIA == 'rock' ||
      choicePlayer == 'paper' && choiceIA == 'spock' ||

      choicePlayer == 'scissors' && choiceIA == 'paper' || 
      choicePlayer == 'scissors' && choiceIA == 'lizard' ||

      choicePlayer == 'lizard' && choiceIA == 'spock' ||
      choicePlayer == 'lizard' && choiceIA == 'paper' ||

      choicePlayer == 'spock' && choiceIA == 'scissors' ||
      choicePlayer == 'spock' && choiceIA == 'rock'

    if (draw){
      draws++
      takeID('draws').innerHTML = `: ${draws}`
      takeID('result').innerHTML = 'Draw'
      takeID('choicePlayer').style.filter = 'sepia(100%)'
      takeID('choiceIA').style.filter = 'sepia(100%)'
      document.body.style.backgroundColor = '#9398ff'

    }
    else if (playerWin){
      victories++
      takeID('victories').innerHTML = `: ${victories}`
      takeID('result').innerHTML = 'Win'
      takeID('choiceIA').style.filter = 'sepia(100%)'
      takeID('choicePlayer').style.filter = 'sepia(0)'
      document.body.style.backgroundColor = '#68e05e'
    }
    else{
      defeats++
      takeID('defeats').innerHTML = `: ${defeats}`
      takeID('result').innerHTML = 'Lose'
      takeID('choicePlayer').style.filter = 'sepia(100%)'
      takeID('choiceIA').style.filter = 'sepia(0)'
      document.body.style.backgroundColor = '#f24f4f'
    }
    porcentageWin = takeID('porcentageWin').innerHTML = `( ${(victories / (victories + defeats + draws)*100).toFixed(2)} %)`
    porcentageDefeat = takeID('porcentageDefeat').innerHTML = `( ${(defeats / (victories + defeats + draws)*100).toFixed(2)} %)`
    porcentageDraw = takeID('porcentageDraw').innerHTML = `( ${(draws / (victories + defeats + draws)*100).toFixed(2)} %)`
  }
  choices()

})(); 





