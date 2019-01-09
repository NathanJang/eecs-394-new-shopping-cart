import React, { Component } from 'react'
import Item from './Item'

export default class Shelf extends Component {
  render() {
    const { products } = this.props
    return products.map(product => {
      return <Item product={product} />
    })
  }
}
