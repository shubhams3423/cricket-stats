import React from "react";
import "../componentCss/sidebar.css";
const Sidebar = ({ showMenu }) => {
  return (
    <div
      className={(showMenu && "showSidebar") || "hideSidebar"}
      id="sidebar"
    ></div>
  );
};

export default Sidebar;
