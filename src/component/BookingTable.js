import React, { Component } from 'react'
import {connect} from 'react-redux'
import bookingTable from '../data/seatList.json'
import { bookingTicketAction } from '../redux/action/BookingListAction'


class BookingTable extends Component {

    renderBookingRow = (seatList, rowIndex) => {
        return (
            seatList.map((seat, seatIndex) => {
                if (rowIndex === 0) {
                    return (
                        <th key={seatIndex}>{seatIndex + 1}</th>
                    )
                }

                if (seat.booked) {
                    return (
                        <td key={seatIndex}>
                            <span className="booking-btn booked">
                                {seatIndex + 1}
                            </span>
                        </td>
                    )
                }

                const ticketIndex = this.props.ticketList.findIndex(
                    (ticket) => ticket.seatNumber === seat.seatNumber
                )

                if (ticketIndex === -1) {
                    return (
                        <td key={seatIndex}>
                            <span onClick={() => {this.props.bookingTicket(seat)}} className="booking-btn">
                                {seatIndex + 1}
                            </span>
                        </td>
                    )
                } else {
                    return (
                        <td key={seatIndex}>
                            <span onClick={() => {this.props.bookingTicket(seat)}} className="booking-btn booking">
                                {seatIndex + 1}
                            </span>
                        </td>
                    )
                }


            })
        )
    }

    renderBookingTable = () => {
        return bookingTable.map((row, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    <th>{row.row}</th>
                    {this.renderBookingRow(row.seatList, rowIndex)}
                </tr>
            )
        })
    }

    render() {
        
        return (
            <table className="booking-ticket__booking-table">
                <tbody>
                    {this.renderBookingTable()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ticketList: state.bookingListReducer.ticketList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookingTicket: (seat) => {
            dispatch(bookingTicketAction(seat))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingTable)