import {combineReducers} from 'redux'
import GameReducer from './GameReducer'

const rootReducer = combineReducers({
    gameState: GameReducer
})

export default rootReducer