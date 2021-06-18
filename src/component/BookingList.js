import React, { Component } from 'react'
import {connect} from 'react-redux'
import { abortTicketAction } from '../redux/action/BookingListAction'

class BookingList extends Component {
    
    renderBookingTickets = () => {
        const ticketList = this.props.ticketList

        return (
            ticketList.map((ticket, index) => {
                return (
                    <tr key={index}>
                        <td>{ticket.seatNumber}</td>
                        <td>{ticket.price.toLocaleString()}</td>
                        <td>
                            <span onClick={() => {this.props.abortTicket(ticket.seatNumber)}} className="abort-btn">X</span>
                        </td>
                    </tr>
                )
            })
        )
    }

    getTotalMoney = () => {
        const ticketList = this.props.ticketList

        return ticketList.reduce((result, ticket) => {
            return result + ticket.price
        }, 0)
    }

    renderBookingTable = () => {
        return (
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>Seat number</th>
                        <th>Price</th>
                        <th>Abort</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBookingTickets()}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <td colSpan="2">{this.getTotalMoney().toLocaleString()}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }

    render() {
        
        return (
            <div className="booking-ticket__booking-list">
                <h2 className="heading">LIST OF BOOKED TICKETS</h2>
                <div className="note">
                    <div className="note-row">
                        <div className="label label-booked"></div>
                        <span className="value">Booked seat</span>
                    </div>
                    <div className="note-row">
                        <div className="label label-booking"></div>
                        <span className="value">Booking seat</span>
                    </div>
                    <div className="note-row">
                        <div className="label label-unbooked"></div>
                        <span className="value">UnBooked seat</span>
                    </div>
                </div>
                {this.renderBookingTable()}
            </div>
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
        abortTicket: (seatNumber) => {
            dispatch(abortTicketAction(seatNumber))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList)