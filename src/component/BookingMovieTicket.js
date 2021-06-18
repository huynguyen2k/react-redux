import React, { Component } from 'react'
import BookingTable from './BookingTable'
import BookingList from './BookingList'
import '../assets/css/style.css'

export default class BookingMovieTicket extends Component {
    render() {
        
        return (
            <div className="wrapper">
                <div className="background"></div>
                <div className="booking-ticket">
                    <div className="container-fluid">
                        <div className="row justify-content-around">
                            <div className="col-7">
                                <h1 className="booking-ticket__header">BOOKING MOVIE TICKET</h1>
                                <div className="booking-ticket__line"></div>
                                <BookingTable />
                            </div>
                            <div className="col-4">
                                <BookingList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
