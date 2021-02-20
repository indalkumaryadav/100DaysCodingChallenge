import React, { useState } from "react";
import axios from "axios";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function PaymentRazorpay() {
  const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");
  const handlePaymentSuccess = async (response) => {
    let bodyData = new FormData();
    bodyData.append("response", JSON.stringify(response));
    axios
      .post("http://127.0.0.1:8000/payment/payment/success/", bodyData)
      .then((res) => {
        console.log("Everything is OK!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function displayRazorpay() {
    const formdata = new FormData();
    formdata.append("name", "indal kumar");
    formdata.append("amount", 10);

    const data = fetch("http://127.0.0.1:8000/payment/pay/", {
      method: "POST",
      body: formdata,
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: "rzp_test_EBY8gnqLXnvkoG",
      currency: "INR",
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      handler: function (response) {
        handlePaymentSuccess(response);
      },
      prefill: {
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div>
      <button onClick={displayRazorpay}>Payment</button>
    </div>
  );
}
export default PaymentRazorpay;
