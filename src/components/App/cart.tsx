import React, { Component } from "react"

interface AppProps {
  productDetails;
}
class Cart extends Component<AppProps> {
  render() {
    const { productDetails } = this.props
    return (
      <div style={{ backgroundColor: "#ebe5eb" }}>
        <span className="m-3" style={{ fontSize: "25px" }}>
          Cart
        </span>
        <span className="badge badge-secondary p-2 m-3">
          {productDetails.filter((product) => product.count > 0).length}
        </span>
      </div>
    )
  }
}

export default Cart
