import React, { Component } from "react"
interface AppProps {
  productDetails, onIncrement, onDecrement, onDelete 
}
class ProductList extends Component<AppProps> {
  state = {}
  render() {
    const { productDetails, onIncrement, onDecrement, onDelete } = this.props
    return (
      <ul style={{ listStyleType: "none" }}>
        {productDetails.map((product) => (
          <li key={product.id} className="mt-2">
            <span className="m-2">{product.name}</span>
            <span className="badge badge-info p-2">{product.count}</span>{" "}
            <button
              onClick={() => onIncrement(product.id)}
              className="btn btn-light"
            >
              +
            </button>{" "}
            <button
              onClick={() => onDecrement(product.id)}
              className="btn btn-light"
            >
              -
            </button>{" "}
            <button
              onClick={() => onDelete(product.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default ProductList
