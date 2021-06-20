import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeBurgerComponentAction } from '../redux/action/BurgerAction'

class BurgerBill extends Component {

    renderBurgerComponentInfo = () => {
        let index = 0
        const burger = this.props.burger
        const burgerComponent = []
        
        for (let component in burger) {

            let amount = burger[component]
            let price = this.props.menu[component]
            let total = amount * price

            const componentJSX = (
                <tr key={index++}>
                    <td>{component}</td>
                    <td>
                        <button onClick={() => {this.props.changeBurgerComponent(component, 1)}} className="add-btn">+</button>
                        <span>{amount}</span>
                        <button onClick={() => {this.props.changeBurgerComponent(component, -1)}}className="minus-btn">-</button></td>
                    <td>{price}</td>
                    <td>{total}</td>
                </tr>
            )

            burgerComponent.push(componentJSX)
        }

        return burgerComponent
    }

    render() {

        return (
            <div className="burger-bill">
                <h1 className="burger-bill-header">Chọn thức ăn</h1>
                <table className="burger-bill-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Thức ăn</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBurgerComponentInfo()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">Tổng cộng:</th>
                            <td>{this.props.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.burgerState.burger,
        menu: state.burgerState.menu,
        total: state.burgerState.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeBurgerComponent: (componentName, amount) => {
            dispatch(changeBurgerComponentAction(componentName, amount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBill)
