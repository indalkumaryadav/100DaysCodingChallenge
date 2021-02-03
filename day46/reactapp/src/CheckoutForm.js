import React from "react";
import StripeCheckout from "react-stripe-checkout";

const CheckoutForm = () => {
  const product = {
    name: "indal KUmar",
    price: 100,
    productBy: "something",
  };
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
  return (
    <StripeCheckout
      token={makePayment}
      stripeKey="pk_test_51IFxoFKcF6RE35QENm96nix1SoslRhypxFqBOCXSQOQNP4Yp321qw0xuNotB5H1F1BgqfJcEXrYE9MkkJlXMZxqE00jtpYotlA"
      name="Buy Product of mine"
      amount={product.price * 100}
    />
  );
};
export default CheckoutForm;
