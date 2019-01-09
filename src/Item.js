import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='shelf-item'>
        <ItemDetails product={product} />
        <div>Add to cart</div>
      </div>
    )
  }
}

class ItemDetails extends Component {
  render() {
    const { product } = this.props
    return (
      <div>
        <img src={require(`./static/products/${product.sku}_1.jpg`)} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    )
  }
}
