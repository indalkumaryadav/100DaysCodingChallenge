import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <NavBar />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
