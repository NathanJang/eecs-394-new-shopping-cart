import React, { Component } from 'react'
import Product from './Product'

import './style.scss'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isOpen: false
    // }
  }

  render() {
    const { cartTotal, /*cartProducts, removeProduct*/ } = this.props

    const products = this.props.cartProducts.map(product => {
      return <Product product={product} key={product.id} removeProduct={this.props.removeProduct} />
    })

    return (
      <div className={`float-cart${this.props.isOpen ? ' float-cart--open' : ''}`}>
        {(() => {
          if (this.props.isOpen) {
            return (
              <div
                onClick={() => this.props.handleToggle()}
                className="float-cart__close-btn"
              >
                X
              </div>
            )
          } else {
            return (
              <span
                onClick={() => this.props.handleToggle()}
                className="bag bag--float-cart-closed"
              >
                <span className="bag__quantity">{cartTotal.productQuantity}</span>
              </span>
            )
          }
        })()}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the bag <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`$${cartTotal.totalPrice}`}
              </p>
            </div>
            <div className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    )
  }
}
