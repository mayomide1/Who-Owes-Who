import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import People from "./People";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Settings from "./Settings";
import PersonInfo from "./PersonInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<PersonInfo />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
