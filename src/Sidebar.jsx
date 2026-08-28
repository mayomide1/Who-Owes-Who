import React from 'react'
import {Link} from 'react-router-dom'
import './css/sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>My App</h2>

        <nav>
           <Link to="/dashboard"><button>Dashboard</button></Link> 
            <button><a href="#">People</a></button>
            <button><a href="#">Transactions</a></button>
            <button><a href="#">Reports</a></button>
            <button><a href="#">Settings</a></button>
            <button><a href="#">Log out</a></button>
        </nav>
    </div>
  )
}

export default Sidebar