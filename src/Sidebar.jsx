import React from 'react'
import './css/sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>My App</h2>

        <nav>
            <button><a href="#">Dashboard</a></button>
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