import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <>
        <h1>indal</h1>
      </>
    );
  }
}
mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

mapDispatchToProps = (state) => {
  return {
    onTryAutoSignUp: () => {
      actions.authCheckState();
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
