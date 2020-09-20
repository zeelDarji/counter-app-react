import React, { Component } from "react"
interface AppProps{
  onReset
}
class Reset extends Component<AppProps> {
  state = {}
  render() {
    const { onReset } = this.props
    return (
      <button
        onClick={onReset}
        className="btn btn-primary m-3"
      >
        Reset
      </button>
    )
  }
}

export default Reset
