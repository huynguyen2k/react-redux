
const gameReducer = {
    win: 0,
    totalRounds: 0,
    playerSelected: 'scissors',
    computerSelected: 'scissors',
    result: 'Who wins the battle?'
}

const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice)
        return 0 // draw
    else if (playerChoice - computerChoice === 1 || playerChoice - computerChoice === -2) {
        return 1 // player win computer
    } else {
        return -1 // computer win player
    }
}

const GameReducer = (state = gameReducer, action) => {
    let computerIndex, playerIndex, result
    const choices = ['scissors', 'rock', 'paper']

    switch (action.type) {
        case 'MAKE_CHOICE':
            state.playerSelected = action.value
            break

        case 'RANDOM_CHOICE':
            while (true) {
                computerIndex = Math.floor(Math.random() * choices.length)
                if (choices[computerIndex] !== state.computerSelected) {
                    break
                }
            }
            state.computerSelected = choices[computerIndex]

            break

        case 'PLAY_GAME':
            playerIndex = choices.indexOf(state.playerSelected)
            computerIndex = choices.indexOf(state.computerSelected)
            
            result = getResult(playerIndex, computerIndex)

            if (result === 1) {
                state.win++
                state.result = 'Player win computer'
            } else if (result === -1) {
                state.win--
                state.result = 'Computer win player'
            } else {
                state.result = 'Computer and player draw'
            }
            state.totalRounds++

            break

        default:
    }

    return {...state}
}

export default GameReducer