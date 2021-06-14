import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

import {connect} from 'react-redux'

class Main extends Component {

    countItemsInCart = () => {
        const cart = this.props.cart

        return cart.reduce((result, product) => {
            return result + product.amount
        }, 0)
    }

    render() {
        
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="cart-wrap">
                        <span onClick={this.props.showModal} className="btn btn-primary">Cart ({this.countItemsInCart()})</span>
                    </div>
                </div>
                <ProductList />
                <ProductDetail />
                <Cart />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartState.cart
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        showModal: () => {
            const action = {
                type: 'SHOW_MODAL',
                style: {
                    display: 'flex'
                }
            }
        
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)