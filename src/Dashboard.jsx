import React from 'react'

import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import Sidebar from './Sidebar';
import './css/dashboard.css'

const dashboard = () => {
  return (
   <>
    <div className="dashboard">
        <Sidebar />
    <main>
    <div className="header">
        <div className='header-left'>
            <h2>Hello Ayo</h2>
            <p>Here's what's happening with your money</p>
        </div>
        
        <div className='header-right'>
            <button><FaBell /></button>
        <div className='header-right-user'>
            <button><FaUserAlt/></button>
            <h2>Ayo John</h2>
            <button><MdKeyboardArrowDown /></button>
        </div>
        </div>
    </div>

    <div>
        <div className="people-owe-me">
            <h2>People Owe Me</h2>
            <h2>35,000</h2>
            <h2>Total from 3 people</h2>
        </div>
        <div className="i-owe-people">
            <h2>I owe people</h2>
            <h2>12,500</h2>
            <h2>Total from 3 people</h2>
        </div>
        <div className="net-balance">
            <h2>Net Balance</h2>
            <h2>22,500</h2>
            <h2>Total from 3 people</h2>
        </div>
    </div>

    <div>
        <h2>People</h2>
        <button>View All</button>
        <div>
            <div></div>
            <h2>David</h2>
            <h2>Owes you</h2>
            <h2>15,000</h2>
            <button><IoMdArrowDropright/></button>
        </div>
        <div>
            <div></div>
            <h2>David</h2>
            <h2>Owes you</h2>
            <h2>15,000</h2>
            <button><IoMdArrowDropright/></button>
        </div>
        <div>
            <div></div>
            <h2>David</h2>
            <h2>Owes you</h2>
            <h2>15,000</h2>
            <button><IoMdArrowDropright/></button>
        </div>
        <button>Add Transaction</button>
    </div>

    <div>
        <h2>Recent Activity</h2>
        <button>View All</button>
        <div>
            <div></div>
            <h2>Today</h2>
            <h3>David owes you 5,000</h3>
        </div>
            <div>
            <div></div>
            <h2>Today</h2>
            <h3>David owes you 5,000</h3>
        </div>
        <div>
            <div></div>
            <h2>Today</h2>
            <h3>David owes you 5,000</h3>
        </div>
    </div>
    </main>
    </div>
</> 
  )
}

export default dashboard