import React, { Component } from 'react'
import Shelf from './Shelf/'
import Cart from './Cart/'
import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productQuantity: 0,
      cartProducts: [],
      totalPrice: 0
    }

    this.handleProductSelection = this.handleProductSelection.bind(this)
  }

  handleProductSelection(product) {
    this.setState(prevState => {
      return {
        productQuantity: prevState.productQuantity + 1,
        cartProducts: prevState.cartProducts.concat(product),
        totalPrice: prevState.totalPrice + product.price
      }
    })
  }

  render() {
    return (
      <div>
        <Shelf
          handleProductSelection={this.handleProductSelection}
        />
        <Cart
          cartTotal={{
            productQuantity: this.state.productQuantity,
            totalPrice: this.state.totalPrice
          }}
          cartProducts={this.state.cartProducts}
        />
      </div>
    )
  }
}

export default App
