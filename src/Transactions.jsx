import React from 'react'
import Sidebar from "./Sidebar";
import Header from './Header';
const Transactions = () => {
  return (
    <>
    <div className='transaction-page'>
        <Sidebar />
    <main>
      <Header />
    <div className='transaction-container'>
    
    </div>
    </main>
    </div>
    </>
  )
}

export default Transactions