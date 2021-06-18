import { ABORT_TICKET, BOOKING_TICKET } from "../type/BookingListType"

export const bookingTicketAction = (seat) => {
    return {
        type: BOOKING_TICKET,
        seat
    }
}

export const abortTicketAction = (seatNumber) => {
    return {
        type: ABORT_TICKET,
        seatNumber
    }
}