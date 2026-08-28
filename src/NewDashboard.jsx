import React, { useState } from 'react'


const NewDashboard = () => {
 const [isModalOpen, setIsModalOpen] = useState(true)
 const [isAddNewPersonOpen, setIsAddNewPersonOpen] = useState(true)
 const [fullName, setFullName] = useState("")
 const [phone, setPhone] = useState("")
 const [notes, setNotes] = useState("")

const savedPeople = JSON.parse(localStorage.getItem("person")) || [];

function savePerson(){
    if (fullName === ""){
        alert("Enter a Name")
        return
    }

    const personData = {
        name: fullName,
        phone: phone,
        notes: notes,
    }

    savedPeople.push(personData)

    localStorage.setItem("person", JSON.stringify(savedPeople))
    console.log(savedPeople)
}


  return (
    <>
    <div>
        <button onClick={() => setIsModalOpen(!isModalOpen)}>Add Transaction</button>
        
    {isModalOpen && 
        <div>
        {savedPeople.map((person,index)=> {
            return(
                <div key={index}>
                    <p>{person.name}</p>
                    <p>{person.phone}</p>
                </div>
            )
        })}
            <button onClick={() => setIsAddNewPersonOpen(!isAddNewPersonOpen)}>Add New Person</button>
        </div>
    }

    {isAddNewPersonOpen &&
    <>
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
    </div>
    </>
  )
}
export default NewDashboard