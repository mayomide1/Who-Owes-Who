import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './css/sidebar.css'

import { MdHome, MdPeopleAlt } from "react-icons/md";
import { IoSettings, IoLogOut  } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = ({isSideBarOpen}) => {
    const [activeButton, setActiveButton] = useState("dashboard")
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("active_user")
        navigate('/login')
    }

  return (
    <>
    <div className={`sidebar ${isSideBarOpen ? 'open': ''}`}>
        <h2>My App</h2>
        <nav>
            <button 
                className={`dashboard-btn ${activeButton === "dashboard" ? 'active' : '' }`}
                onClick={() => {setActiveButton("dashboard"); navigate("/dashboard")}}>
                <MdHome fontSize={20}/>
                Dashboard
            </button>
            <button 
                className={activeButton === "people"  ? 'active' : '' }
                onClick={() => {setActiveButton("people"); navigate("/people")}}>
                <MdPeopleAlt fontSize={20}/>People
            </button>
            <button
                className={activeButton === "transactions"  ? 'active' : '' }
                onClick={() => {setActiveButton("transactions"); navigate("/transactions")}}>
                <GrTransaction fontSize={20}/>Transactions
            </button>
            <button
                className={activeButton === "reports"  ? 'active' : '' }
                onClick={() => {setActiveButton("reports"); navigate("/reports")}}>
                <TbReportSearch fontSize={20} />Reports
            </button>
            <button
                className={activeButton === "settings"  ? 'active' : '' }
                onClick={() => {setActiveButton("settings"); navigate("/settings")}}>
                <IoSettings fontSize={20}/>Settings
            </button>
            <button 
                onClick={logout} className='logout'> 
                <IoLogOut fontSize={20}/>Log out
            </button>
        </nav>
    </div>
    </>
  )
}

export default Sidebar