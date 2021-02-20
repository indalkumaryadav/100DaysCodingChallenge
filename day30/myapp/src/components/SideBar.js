import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import SideBarOption from "./SideBarOption";
import ExploreIcon from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Button } from "@material-ui/core";

const SideBar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitter_icon" />
      <SideBarOption active Icon={HomeIcon} text="Home" />
      <SideBarOption Icon={ExploreIcon} text="Explore" />
      <SideBarOption Icon={SearchIcon} text="Notifications" />
      <SideBarOption Icon={MailOutlineIcon} text="Messages" />
      <SideBarOption Icon={MailOutlineIcon} text="Bookmars" />
      <SideBarOption Icon={MailOutlineIcon} text="Lists" />
      <SideBarOption Icon={MailOutlineIcon} text="Profile" />
      <SideBarOption Icon={MailOutlineIcon} text="More" />
      <Button variant="outlined" className="tweet_button" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;
