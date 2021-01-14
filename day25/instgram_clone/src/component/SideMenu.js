import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core";

const usestyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: 300,
    height: "100%",
    backgroundColor: "#f234",
  },
});

const SideMenu = () => {
  const classes = usestyles();
  return <div className={classes.sideMenu}></div>;
};

export default SideMenu;
