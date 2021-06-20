import {combineReducers} from 'redux'
import BurgerReducer from './BurgerReducer'

const rootReducer = combineReducers({
    burgerState: BurgerReducer
})

export default rootReducer