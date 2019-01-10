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
  }

  render() {
    return (
      <div>
        <Shelf />
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
