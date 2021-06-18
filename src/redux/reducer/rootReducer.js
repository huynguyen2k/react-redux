import {combineReducers} from 'redux'
import BookingListReducer from './BookingListReducer'

const rootReducer = combineReducers({
    bookingListReducer: BookingListReducer
})

export default rootReducer