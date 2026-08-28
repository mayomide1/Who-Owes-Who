import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { whoOwes } from './server';
import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUserAlt, FaArrowUp , FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Sidebar from './Sidebar';
import './css/dashboard.css'

const dashboard = () => {
    const [isarrowOpen, setisArrowOpen] = useState("false")
    const loggedUser = JSON.parse(localStorage.getItem('active_user')) || null
    const savedPeople = JSON.parse(localStorage.getItem("person")) || [];

    const navigate = useNavigate()
  return (
   <>
    <div className="dashboard">
        <Sidebar />
    <main>
    <div className="header">
        <div className='header-left'>
            <h2>Hello, {loggedUser.firstName}</h2>
            <p className='summary'>Here's what's happening with your money</p>
        </div>
        
        <div className='header-right'>
            <button><FaBell /></button>
        <div className='header-right-user'>
            <div><FaUserAlt/></div>
            <h4>{loggedUser.firstName} {loggedUser.surname}</h4>
            <div onClick={() => setisArrowOpen(!isarrowOpen)}>{isarrowOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp/> }</div>
        </div>
        </div>
    </div>

    <div className='summary-cards'>
        <div className="summary-card">
            <div className='summary-card-header'>
                <p>People Owe Me</p>
                <div><FaArrowUp/></div>
            </div>
            <h1>₦35,000</h1>
            <p>Total from 3 people</p>
        </div>
        <div className="summary-card">
            <div className='summary-card-header'>
                <p>I owe people</p>
                <div><FaArrowDown/></div>
            </div>
            <h1>₦12,500</h1>
            <p>Total from 3 people</p>
        </div>
    </div>

<div className='dashboard-body'>
    <div className='people'>
        <div className='head'>
        <h3>People</h3>
        <button onClick={() => navigate("/people")}>View All</button>
        </div>
            {whoOwes.slice(0,5).map((person, index) => {
                return(
                    <div key={index} className='person-card'>
                        <div className='person-card-left'>
                            <div className='person-avatar'>
                                <div className='img-placeholder'></div>
                            </div>
                            <div className='person-details'>
                                <h3 className='person-name'>{person.name}</h3>
                                <p className="person-status"
                                style={{color: person.category === "owes you" ? "#0B6623" : "#FF0000"}}
                                >{person.category}</p>
                            </div>
                        </div>
                        <div className='person-card-right'>
                            <h3 className='person-amount'
                            style={{color: person.category === "owes you" ? "#0B6623" : "#FF0000"}}
                            >₦{person.amount}</h3>
                            <button className='person-arrow-btn'>
                                <IoMdArrowDropright/>
                            </button>
                        </div>
                    </div>
                )
            })}
            <Link to="/add-transaction">
                <button className='add-btn'>Add Transaction</button>
            </Link>
    </div>

    <div className='histories'>
        <div className='head'>
        <h3>Recent Activity</h3>
        <button>View All</button>
        </div>
        <div className='body'>
        <div className='history'>
            <div className='img-placeholder'></div>
            <div className='history-info'>
            <p className='day'>Today</p>
            <p>David owes you 5,000</p>
            </div>
        </div>
        <div className='history'>
            <div className='img-placeholder'></div>
            <div className='history-info'>
            <p className='day'>Today</p>
            <p>David owes you 5,000</p>
            </div>
        </div>
        <div className='history'>
            <div className='img-placeholder'></div>
            <div className='history-info'>
            <p className='day'>Today</p>
            <p>David owes you 5,000</p>
            </div>
        </div>
        </div>
    </div>
</div>
    </main>
    </div>
</> 
  )
}

export default dashboard