import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  static utitliy_function() {
    let indal = "indal kumar";
    console.log(indal);
    return indal;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={Home.utitliy_function}>utility</button>
      </div>
    );
  }
}
export default Home;
