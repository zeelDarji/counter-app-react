import React, { Component } from "react"
import Cart from "./cart"
import Reset from "./reset"
import ProductList from "./productList"

class App extends Component {
  state = {
    productDetails: [
      {
        id: 1,
        count: 1,
        name: "Puma Shoes",
      },
      {
        id: 2,
        count: 0,
        name: "Boat Rockers",
      },
      {
        id: 3,
        count: 4,
        name: "Watch",
      },
      {
        id: 4,
        count: 2,
        name: "Jockey Tshirt",
      },
    ],
  }

  handleReset = () => {
    this.setState(
      this.state.productDetails.map((product) => (product.count = 0))
    )
  }

  handleDelete = (productID) => {
    const productDetails = this.state.productDetails.filter(
      (product) => product.id !== productID
    )
    this.setState({ productDetails })
  }

  handleDecrement = (productID) => {
    this.setState(
      this.state.productDetails.map((product) =>
        product.id === productID && product.count > 0 ? product.count-- : ""
      )
    )
  }

  handleIncrement = (productID) => {
    this.setState(
      this.state.productDetails.map((product) =>
        product.id === productID ? product.count++ : ""
      )
    )
  }
  render() {
    return (
      <React.Fragment>
        <Cart productDetails={this.state.productDetails}></Cart>
        <Reset onReset={this.handleReset}></Reset>
        <ProductList
          productDetails={this.state.productDetails}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        ></ProductList>
      </React.Fragment>
    )
  }
}

export default App
