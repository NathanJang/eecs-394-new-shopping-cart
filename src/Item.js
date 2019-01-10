import React, { Component } from 'react'
// import './index.scss'

export default class Item extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='shelf-item' onClick={() => this.props.handleProductSelection(product)}>
        <ItemDetails product={product} />
        <div className='shelf-item__buy-btn'>Add to cart</div>
      </div>
    )
  }
}

class ItemDetails extends Component {
  render() {
    const { product } = this.props
    return (
      <div>
        <img
          src={require(`./static/products/${product.sku}_1.jpg`)}
          alt={product.title}
          className='shelf-item__thumb'
        />
        <p className='shelf-item__title'>{product.title}</p>
        <p className='shelf-item__price'>{product.price}</p>
      </div>
    )
  }
}
