import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const TakeMoney = () => {
  const publishableKey =
    "pk_test_51IFxoFKcF6RE35QENm96nix1SoslRhypxFqBOCXSQOQNP4Yp321qw0xuNotB5H1F1BgqfJcEXrYE9MkkJlXMZxqE00jtpYotlA";
  const price = 1000;
  const onToken = (token) => {
    const body = {
      amount: 1000,
      token: token,
    };
    console.log(body.token);
    axios
      .post("http://127.0.0.1:8000/", { token: body.token })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Go Premium" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={price} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="" //Pop-in header image
      billingAddress={false}
    />
  );
};
export default TakeMoney;
