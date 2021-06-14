import React, { Component } from 'react'

import {connect} from 'react-redux'


class Product extends Component {
    render() {
        
        const product = this.props.product

        return (
            <div className="col-3">
                <div className="product">
                    <div className="product__image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product__info">
                        <h3 className="name">{product.name}</h3>
                        <p className="price">{product.price.toLocaleString()}</p>
                        <div className="btn-group">
                            <span onClick={() => {this.props.showProductDetail(product)}} className="btn btn-danger">View</span>
                            <span onClick={() => {this.props.addProductToCart(product)}} className="btn btn-success">Add</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => {

            const cartProduct = {
                id: product.id,
                name: product.name,
                image: product.image,
                amount: 1,
                price: product.price,
            }

            const action = {
                type: 'ADD_PRODUCT_TO_CART',
                cartProduct
            }

            dispatch(action)
        },

        showProductDetail: (product) => {
            const action = {
                type: 'SHOW_PRODUCT_DETAIL',
                product
            }

            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Product)