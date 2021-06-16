const gameState = {
    random: [1, 2, 3],
    selected: 'Small',
    win: 0,
    totalRounds: 0
}

const GameReducer = (state = gameState, action) => {

    switch (action.type) {
        case 'CHANGE_SELECTION':
            state.selected = action.value
            break

        case 'PLAY_GAME':
            state.random = action.random

            const totalNode = state.random.reduce((result, value) => {
                return result + value
            }, 0)

            let result = totalNode <= 11 ? 'Small' : 'Big'

            if (result === state.selected) {
                state.win++
            }
            state.totalRounds++

            break

        default:
    }

    return {...state}
}

export default GameReducer