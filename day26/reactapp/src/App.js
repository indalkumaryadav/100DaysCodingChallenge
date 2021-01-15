import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SingUpPage from "./pages/SignUpPage";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <>
      <CookiesProvider>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SingUpPage />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
      </CookiesProvider>
    </>
  );
}

export default App;
