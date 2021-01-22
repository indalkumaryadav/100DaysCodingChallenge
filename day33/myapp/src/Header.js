import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>YouTube</h1>
      </div>
      <div
        className="search_icon"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          style={{
            width: 300,
          }}
        />
        <SearchIcon
          style={{
            backgroundColor: "grey",
            width: 50,
            cursor: "pointer",
          }}
        />
      </div>
      <div
        className="user_details"
        style={{ display: "flex", alignItems: "center" }}
      >
        <VideoCallIcon style={{ cursor: "pointer", marginLeft: 10 }} />
        <AppsIcon style={{ cursor: "pointer", marginLeft: 10 }} />
        <NotificationsIcon style={{ cursor: "pointer", marginLeft: 10 }} />
        <Avatar style={{ cursor: "pointer", marginLeft: 10 }} />
      </div>
    </div>
  );
};

export default Header;
