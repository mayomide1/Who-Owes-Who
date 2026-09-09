import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { people } from './server'
import Sidebar from './Sidebar'
import Header from './Header'
import "../src/css/person-info.css"

const PersonInfo = () => {
    const navigate = useNavigate()
    const {id} = useParams()

        console.log('URL id:', id)  // Check what ID you're getting
    console.log('Transaction history:', people)  
    const person = people.find(person => Number(id) === person.id)
    console.log(person)
    

  return (
    <>
    <div className="person-info-page">
        <Sidebar />
    <main>
        <Header />
    <div className="person-info">
        <div className='img-placeholder'></div>
        <div>
        <h2>{person.name}</h2>
        <p>Current Balance</p>
        <h1>{person.amount}</h1>
        <p></p>
        </div>
        <div>
        <button>Add Transaction</button>
        <button>Record Payment</button>
        </div>
        <div>
            <h2>Transaction History</h2>
        
        </div>
    </div>
    </main>
    </div>
    </>
  )
}

export default PersonInfo