import React, { useState } from 'react'


const NewDashboard = () => {
 const [isModalOpen, setIsModalOpen] = useState(true)
 const [isAddNewPersonOpen, setIsAddNewPersonOpen] = useState(true)
 const [fullName, setFullName] = useState("")
 const [phone, setPhone] = useState("")
 const [notes, setNotes] = useState("")

// JSON.parse(localStorage.getItem('name'))


function savePerson(){
    if (fullName === ""){
        alert("Enter a Name")
        return
    }
    localStorage.setItem("name", JSON.stringify(phone))
    console.log(fullName)
    console.log(phone)
    console.log(notes)
}


  return (
    <>
        <button onClick={() => setIsModalOpen(isModalOpen)}>Add Transaction</button>
        
    {isModalOpen && 
        <div>
            <h1>This modal is opened</h1>
            <button onClick={() => setIsAddNewPersonOpen(isAddNewPersonOpen)}>Add New Person</button>
        </div>
    }

    {isAddNewPersonOpen &&
    <>
        <h2>Add New Person</h2>
        <label htmlFor="fullname">Full Name</label>
        <input 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}  
        />
        <label htmlFor="phone">Phone (Optional)</label>
        <input
            type="text" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}  
        />
        <label htmlFor="notes">Notes (Optional)</label>
        <input  
            type="text" 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}  
        />
        <button onClick={savePerson}>Save Person</button>
    </>
    }
    
    </>
  )
}
export default NewDashboard