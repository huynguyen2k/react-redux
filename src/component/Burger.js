import React, { Component } from 'react'
import {connect} from 'react-redux'

class Burger extends Component {

    renderBurgerComponent = () => {
        const burger = this.props.burger
        const burgerComponent = []
        let count = 0

        for (let component in burger) {
            let amount = burger[component]

            for (let i = 0; i < amount; i++) {
                burgerComponent.push(<div key={count++} className={component}></div>)
            }
        }        

        return burgerComponent
    }

    render() {

        return (
            <div className="burger">
                <h1 className="burger-header">Bài tập Burger cybersoft</h1>
                <h1 className="burger-subtitle">Bánh burger của bạn</h1>
                <div className="burger-box">
                    <div className="breadTop"></div>
                    {this.renderBurgerComponent()}
                    <div className="breadBottom"></div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        burger: state.burgerState.burger
    }
}

export default connect(mapStateToProps)(Burger)