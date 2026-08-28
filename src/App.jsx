import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import NewDashboard from './NewDashboard';
import Addtransaction from './Addtransaction';
import Login from './Login';
import People from './People';
import Transactions from './Transactions';
import Reports from './Reports';
import Settings from './Settings';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/people" element={<People />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-transaction" element={<Addtransaction />} />
      </Routes>
    </>
  )
}

export default App