import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { transactionHistory } from './server'

const PersonInfo = () => {
    const navigate = useNavigate()
    const {id} = useParams()

        console.log('URL id:', id)  // Check what ID you're getting
    console.log('Transaction history:', transactionHistory)  
    const person = transactionHistory.find(person => person.id === id)
    console.log(person)
    

  return (
    <div>
        <div className='img-placeholder'></div>
        <h2>{person.name}</h2>
        <p>Current Balance</p>
        <h1>{person.amount}</h1>
        <p></p>
        <button>Add Transaction</button>
        <button>Record Payment</button>
        <div>
            <h2>Transaction History</h2>
        </div>
    </div>
  )
}

export default PersonInfo