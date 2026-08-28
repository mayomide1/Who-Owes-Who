import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import NewDashboard from './NewDashboard';
import Addtransaction from './Addtransaction';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-transaction" element={<Addtransaction />} />
      </Routes>
    </>
  )
}

export default App