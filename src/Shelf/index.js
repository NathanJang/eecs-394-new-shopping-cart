import React, { Component } from 'react'
import Item from '../Item'
import { products } from '../static/data/products'

import './style.scss'

export default class Shelf extends Component {
  render() {
    return (
      <div className='shelf-container'>
        {products.map(product => <Item product={product} />)}
      </div>
    )
  }
}
