import React, { Component } from 'react'
import Item from './Item'
import { products } from './static/data/products'

export default class Shelf extends Component {
  render() {
    return products.map(product => {
      return <Item product={product} />
    })
  }
}
