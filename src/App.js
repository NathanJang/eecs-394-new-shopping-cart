import React, { Component } from 'react'
import Shelf from './Shelf/'
import Cart from './Cart/'
import './index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Shelf />
        <Cart />
      </div>
    )
  }
}

export default App
