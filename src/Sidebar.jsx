import React, { useState } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import "./css/sidebar.css";
import logo from "./assets/logo.jpg"

import { MdHome, MdPeopleAlt } from "react-icons/md";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = ({ isSideBarOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveButton = () => {
    if (location.pathname === "/dashboard") return "dashboard";
    if (location.pathname === "/people") return "people";
    if (location.pathname === "/transactions") return "transactions";
    if (location.pathname === "/reports") return "reports";
    if (location.pathname === "/settings") return "settings";
    return "dashboard";
  };

  const activeButton = getActiveButton();

  function logout() {
    localStorage.removeItem("active_user");
    navigate("/login");
  }

  return (
    <>
      <div className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
        <img src={logo} />
        <nav>
          <button
            className={`dashboard-btn ${activeButton === "dashboard" ? "active" : ""}`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <MdHome fontSize={20} />
            Dashboard
          </button>
          <button
            className={activeButton === "people" ? "active" : ""}
            onClick={() => {
              navigate("/people");
            }}
          >
            <MdPeopleAlt fontSize={20} />
            People
          </button>
          <button
            className={activeButton === "transactions" ? "active" : ""}
            onClick={() => {
              navigate("/transactions");
            }}
          >
            <GrTransaction fontSize={20} />
            Transactions
          </button>
          <button
            className={activeButton === "reports" ? "active" : ""}
            onClick={() => {
              navigate("/reports");
            }}
          >
            <TbReportSearch fontSize={20} />
            Reports
          </button>
          <button
            className={activeButton === "settings" ? "active" : ""}
            onClick={() => {
              navigate("/settings");
            }}
          >
            <IoSettings fontSize={20} />
            Settings
          </button>
          <button onClick={logout} className="logout">
            <IoLogOut fontSize={20} />
            Log out
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
