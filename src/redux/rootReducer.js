import {combineReducers} from 'redux'
import GameReducer from './GameReducer'

const rootReducer = combineReducers({
    gameReducer: GameReducer
})

export default rootReducer