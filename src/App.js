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
      totalPrice: 0,
      cartIsOpen: false
    }

    this.handleProductSelection = this.handleProductSelection.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleProductSelection(product) {
    this.setState(prevState => {
      return {
        productQuantity: prevState.productQuantity + 1,
        cartProducts: prevState.cartProducts.concat(product),
        totalPrice: prevState.totalPrice + product.price
      }
    })
    this.setState({ cartIsOpen: true })
  }

  handleToggle() {
    this.setState({
      cartIsOpen: !this.state.cartIsOpen
    })
  }

  removeProduct = product => {
    this.setState(prevState => {
      const { cartProducts } = prevState
      return { cartProducts: cartProducts.filter(p => p.sku !== product.sku) }
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
          isOpen={this.state.cartIsOpen}
          handleToggle={this.handleToggle}
          removeProduct={this.removeProduct}
        />
      </div>
    )
  }
}

export default App
