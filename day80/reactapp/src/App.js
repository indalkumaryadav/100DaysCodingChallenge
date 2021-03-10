import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
