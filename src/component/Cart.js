import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {

    renderProducts = () => {
        const products = this.props.cart

        return products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>
                        <img src={product.image} alt={product.name} />
                    </td>
                    <td>
                        <button onClick={() => {this.props.changeProductAmount(product.id, -1)}}>-</button>
                        <span className="amount">{product.amount}</span>
                        <button onClick={() => {this.props.changeProductAmount(product.id, 1)}}>+</button>
                    </td>
                    <td>{product.price.toLocaleString()}</td>
                    <td>{(product.price * product.amount).toLocaleString()}</td>
                    <td>
                        <span onClick={() => {this.props.deleteProductFromCart(product.id)}} className="btn btn-danger">Delete</span>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="modal" style={this.props.style}>
                <div className="cart">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProducts()}
                        </tbody>
                    </table>
                    <div className="cart__btn-wrap">
                        <span onClick={this.props.closeModal} className="btn btn-primary">Close</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartState.cart,
        style: state.cartState.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProductFromCart: (productID) => {
            const action = {
                type: 'DELETE_PRODUCT_FROM_CART',
                productID
            }

            dispatch(action)
        },

        changeProductAmount: (productID, number) => {
            const action = {
                type: 'CHANGE_PRODUCT_AMOUNT',
                productID,
                number
            }

            dispatch(action)
        }, 

        closeModal: () => {
            const action = {
                type: 'CLOSE_MODAL',
                style: {
                    display: 'none'
                }
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)