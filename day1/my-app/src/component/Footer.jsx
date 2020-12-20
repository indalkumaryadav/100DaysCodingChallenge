import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";
import pic from "../logo192.png";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Footer</h1>
          <img src={process.env.PUBLIC_URL + "/logo512.png"} />
          <img src={pic} />
        </Jumbotron>
      </div>
    );
  }
}
