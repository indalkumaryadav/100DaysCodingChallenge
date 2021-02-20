import React from "react";
import "./App.css";
import SideMenu from "./component/SideMenu";
import Header from "./component/Header";
import PageContent from "./component/PageContent";
import { CssBaseline } from "@material-ui/core";
import SignUp from "./component/SignUp";
import MyDialog from "./component/MyDialog";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <CssBaseline />
      <SideMenu />
      <div style={{ marginLeft: 300 }}>
        <Header />
        <SignUp />
        <PageContent />
        <MyDialog />
      </div>
      <Home />
    </>
  );
};

export default App;
