import React, { Component } from 'react'
import Product from './Product'
import products from './dataProduct.json'
import './assets/css/style.css'

export default class ProductList extends Component {

    renderProducts = () => {
        return products.map((product, index) => {
            return (
                <Product key={index} product={product} />
            )
        })
    }

    render() {
        
        return (
            <div className="product-list">
                <div className="container">
                    <h1 className="product-list__header">PRODUCT LIST</h1>
                    <div className="row">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}
