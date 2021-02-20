import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import { Container } from "@material-ui/core";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
