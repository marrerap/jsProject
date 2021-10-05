

function computerPlay() {
    
    const choices = [
        'rock',
        'paper',
        'scissors'
    ]
    return choices[Math.floor(Math.random() * choices.length)]
}

function play(playerSelection, computerSelection) {

}

console.log(computerPlay())