import React, { Component } from 'react'

import {connect} from 'react-redux'

class ProductDetail extends Component {
    render() {
        const productDetail = this.props.productDetail

        return (
            <div className="product-detail">
                <div className="container">
                    <h1 className="product-detail__header">PRODUCT DETAIL</h1>
                    <div className="row">
                        <div className="col-5">
                            <div className="product-detail__image">
                                <img src={productDetail.image} alt={productDetail.name} />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="product-detail__info">
                                <div className="info-row">
                                    <p className="key">Screen</p>
                                    <p className="value">
                                        {productDetail['screen']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">Operator System</p>
                                    <p className="value">
                                        {productDetail['operator-system']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">Rear Camera</p>
                                    <p className="value">
                                        {productDetail['rear-camera']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">Front Camera</p>
                                    <p className="value">
                                        {productDetail['front-camera']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">CPU</p>
                                    <p className="value">
                                        {productDetail['cpu']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">RAM</p>
                                    <p className="value">
                                        {productDetail['ram']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">ROM</p>
                                    <p className="value">
                                        {productDetail['rom']}
                                    </p>
                                </div>
                                <div className="info-row">
                                    <p className="key">PIN</p>
                                    <p className="value">
                                        {productDetail['pin']}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        productDetail: state.cartState.productDetail
    }
}

export default connect(mapStateToProps)(ProductDetail)