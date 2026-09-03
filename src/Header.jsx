import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import Sidebar from "./Sidebar";
import "./css/header.css";
import "./css/sidebar.css";

const Header = () => {
  const [isarrowOpen, setisArrowOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("active_user")) || null;

  function closeSidebar() {
    setIsSideBarOpen(false);
  }

  return (
    <>
      <div className="header">
        <div className="header-left">
          <button
            className="hamburger"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <GiHamburgerMenu />
          </button>
          <div className="header-left-welcome">
          <h2>Hello, {loggedUser.firstName} 👋</h2>
          <p className="summary">Here's what's happening with your money</p>
          </div>
        </div>
        <div className="header-right">
          <button>
            <FaBell />
          </button>
          <div className="header-right-user">
            <div>
              <FaUserAlt />
            </div>
            <h4>
              {loggedUser.firstName} {loggedUser.surname}
            </h4>
            <div onClick={() => setisArrowOpen(!isarrowOpen)}>
              {isarrowOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          closeSidebar;
        }}
      ></button>

      {isSideBarOpen && (
        <div className="modal-over-lay" onClick={closeSidebar}>
          <Sidebar isSideBarOpen={isSideBarOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
