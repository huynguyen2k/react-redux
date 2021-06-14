import {combineReducers} from 'redux'
import CartReducer from './CartReducer'

const rootReducer = combineReducers({
    cartState: CartReducer
})

export default rootReducer