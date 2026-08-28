import React from 'react'
import {Link} from 'react-router-dom'
import {user} from './server.js'

import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import Sidebar from './Sidebar';
import './css/dashboard.css'

const dashboard = () => {
    const savedPeople = JSON.parse(localStorage.getItem("person")) || [];
    console.log(savedPeople)
    console.log(user)

  return (
   <>
    <div className="dashboard">
        <Sidebar />
    <main>
    <div className="header">
        <div className='header-left'>
            <h2>Hello {user.firstName}</h2>
            <p>Here's what's happening with your money</p>
        </div>
        
        <div className='header-right'>
            <button><FaBell /></button>
        <div className='header-right-user'>
            <button><FaUserAlt/></button>
            <h2>{user.firstName} {user.surname}</h2>
            <button><MdKeyboardArrowDown /></button>
        </div>
        </div>
    </div>

    <div className='summary-cards'>
        <div className="summary-card">
            <h2>People Owe Me</h2>
            <p>35,000</p>
            <p>Total from 3 people</p>
        </div>
        <div className="summary-card">
            <h2>I owe people</h2>
            <p>12,500</p>
            <p>Total from 3 people</p>
        </div>
        <div className="summary-card">
            <h2>Net Balance</h2>
            <p>22,500</p>
            <p>Total from 3 people</p>
        </div>
    </div>

<div className='dashboard-body'>
    <div className='people'>
        <div className='head'>
        <h3>People</h3>
        <button>View All</button>
        </div>
            {savedPeople.map((person, index) => {
                return(
                    <div key={index} className='person-card'>
                        <div className='person-card-left'>
                            <div className='person-avatar'>
                                <div className='img-placeholder'></div>
                            </div>
                            <div className='person-details'>
                                <h3 className='person-name'>{person.name}</h3>
                                <p className='person-status'>Owes you</p>
                            </div>
                        </div>
                        <div className='person-card-right'>
                            <p className='person-amount'>15,000</p>
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