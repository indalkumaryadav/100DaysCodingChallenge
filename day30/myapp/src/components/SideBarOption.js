import React from "react";
import "./sidebar.css";

function SideBarOption({ active, Icon, text }) {
  return (
    <div className={`sidebar_option ${active && "sidebar_option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SideBarOption;
