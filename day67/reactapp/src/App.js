import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increament = this.increament.bind(this);
  }
  increament() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increament}>increament</button>
      </div>
    );
  }
}
export default App;
