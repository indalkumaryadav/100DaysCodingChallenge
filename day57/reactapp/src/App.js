import React from "react";
import PaymentRazorpay from "./components/PaymentRazorpay";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PaymentRazorpay} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
