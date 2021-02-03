import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class CheckoutForm extends React.Component {
  onToken = (token) => {
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  };
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51IFxoFKcF6RE35QENm96nix1SoslRhypxFqBOCXSQOQNP4Yp321qw0xuNotB5H1F1BgqfJcEXrYE9MkkJlXMZxqE00jtpYotlA"
        name="Buy Product of mine"
        amount={100 * 100}
      />
    );
  }
}
