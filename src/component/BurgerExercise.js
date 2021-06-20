import React, { Component } from 'react'
import Burger from './Burger'
import BurgerBill from './BurgerBill'

import '../assets/css/style.css'

export default class BurgerExercise extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <Burger />
                        </div>
                        <div className="col-5">
                            <BurgerBill />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
