import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import NewDashboard from './NewDashboard';
import Addtransaction from './Addtransaction';
import Login from './Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-transaction" element={<Addtransaction />} />
      </Routes>
    </>
  )
}

export default App