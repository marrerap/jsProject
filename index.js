const prompt = require('prompt-sync')()

const userInput = prompt('rock, paper, or scissors: ')


function computerPlay() {

    const choices = [
        'rock',
        'paper',
        'scissors'
    ]
    return choices[Math.floor(Math.random() * choices.length)]
}

function play(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose, paper beats rock!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win, rock beats scissors!'
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'It is a draw!'
    }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose, scissors beat paper!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win, paper beats rock!'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'It is a draw!'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose, rock beats scissors!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win, scissors beat paper!'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'It is a draw!'
    } else return 'That is not what I asked for...'
}

    console.log(play(userInput, computerPlay()))