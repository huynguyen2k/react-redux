import { ABORT_TICKET, BOOKING_TICKET } from "../type/BookingListType"

const bookingListReducer = {
    ticketList: []
}

const BookingListReducer = (state = bookingListReducer, action) => {
    let bookingSeatIndex

    switch (action.type) {
        case BOOKING_TICKET:
            bookingSeatIndex = state.ticketList.findIndex((seat) => {
                return seat.seatNumber === action.seat.seatNumber
            })

            if (bookingSeatIndex === -1) {
                state.ticketList.push(action.seat)
            } else {
                state.ticketList.splice(bookingSeatIndex, 1)
            }

            state.ticketList = [...state.ticketList]
            
            break;

        case ABORT_TICKET:
            bookingSeatIndex = state.ticketList.findIndex((ticket) => ticket.seatNumber === action.seatNumber)

            if (bookingSeatIndex !== -1) {
                state.ticketList.splice(bookingSeatIndex, 1)
                state.ticketList = [...state.ticketList]
            }
            
            break

        default:
    }

    return {...state}
}

export default BookingListReducer