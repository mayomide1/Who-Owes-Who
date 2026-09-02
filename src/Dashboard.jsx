import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { whoOwes } from "./server";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import Sidebar from "./Sidebar";
import "./css/dashboard.css";
import "./css/addnewperson.css";
import "./css/addtransaction.css";
import Header from "./Header";

const dashboard = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isAddNewPersonOpen, setIsAddNewPersonOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const savedPeople = JSON.parse(localStorage.getItem("person")) || [];

  function savePerson() {
    if (fullName === "") {
      alert("Enter a Name");
      return;
    }

    const personData = {
      name: fullName,
      phone: phone,
      notes: notes,
    };

    savedPeople.push(personData);

    localStorage.setItem("person", JSON.stringify(savedPeople));
    console.log(savedPeople);
  }


  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <main>
 <Header />

          <div className="summary-cards">
            <div className="summary-card">
              <div className="summary-card-header">
                <p>People Owe Me</p>
                <div>
                  <FaArrowUp />
                </div>
              </div>
              <h1>₦35,000</h1>
              <p>Total from 3 people</p>
            </div>
            <div className="summary-card">
              <div className="summary-card-header">
                <p>I owe people</p>
                <div>
                  <FaArrowDown />
                </div>
              </div>
              <h1>₦12,500</h1>
              <p>Total from 3 people</p>
            </div>
          </div>

          <div className="dashboard-body">
            <div className="people">
              <div className="head">
                <h3>People</h3>
                <button onClick={() => navigate("/people")}>View All</button>
              </div>
              {whoOwes.slice(0, 5).map((person, index) => {
                return (
                  <div key={index} className="person-card">
                    <div className="person-card-left">
                      <div className="person-avatar">
                        <div className="img-placeholder"></div>
                      </div>
                      <div className="person-details">
                        <h3 className="person-name">{person.name}</h3>
                        <p
                          className="person-status"
                          style={{
                            color:
                              person.category === "owes you"
                                ? "#0B6623"
                                : "#FF0000",
                          }}
                        >
                          {person.category}
                        </p>
                      </div>
                    </div>
                    <div className="person-card-right">
                      <h3
                        className="person-amount"
                        style={{
                          color:
                            person.category === "owes you"
                              ? "#0B6623"
                              : "#FF0000",
                        }}
                      >
                        ₦{person.amount}
                      </h3>
                      <button className="person-arrow-btn">
                        <IoMdArrowDropright />
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                className="add-btn"
                onClick={() =>
                  setIsTransactionModalOpen(!isTransactionModalOpen)
                }
              >
                Add Transaction
              </button>
            </div>

            <div className="histories">
              <div className="head">
                <h3>Recent Activity</h3>
                <button>View All</button>
              </div>
              <div className="body">
                <div className="history">
                  <div className="img-placeholder"></div>
                  <div className="history-info">
                    <p className="day">Today</p>
                    <p>David owes you 5,000</p>
                  </div>
                </div>
                <div className="history">
                  <div className="img-placeholder"></div>
                  <div className="history-info">
                    <p className="day">Today</p>
                    <p>David owes you 5,000</p>
                  </div>
                </div>
                <div className="history">
                  <div className="img-placeholder"></div>
                  <div className="history-info">
                    <p className="day">Today</p>
                    <p>David owes you 5,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {isTransactionModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsTransactionModalOpen(!isTransactionModalOpen)}
        >
          <div className="modal add-trans">
            <button
              className="modal-close"
              onClick={() => setIsTransactionModalOpen(!isTransactionModalOpen)}
            >
              <IoCloseSharp />
            </button>
            <h2>Step 1: Select Person</h2>
            <p>Who's this transaction with?</p>
            <input type="text" placeholder="Search or select person" />
            {savedPeople.map((person, index) => {
              return (
                <div key={index} className="person-item">
                  <div className="person-avatar"></div>
                  <span className="person-name">{person.name}</span>
                  <button className="person-arrow">
                    <IoMdArrowDropright />
                  </button>
                </div>
              );
            })}
            <button onClick={() => setIsAddNewPersonOpen(!isAddNewPersonOpen)}>
              + Add New Person
            </button>
          </div>
        </div>
      )}

      {isAddNewPersonOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsAddNewPersonOpen(!isAddNewPersonOpen)}
        >
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setIsAddNewPersonOpen(!isAddNewPersonOpen)}
            >
              <IoCloseSharp />
            </button>

            <div className="add-person-form">
              <h2>Add New Person</h2>

              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                value={fullName}
                placeholder="Emeka"
                onChange={(e) => setFullName(e.target.value)}
              />

              <label htmlFor="phone">
                Phone <span>(Optional)</span>
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                placeholder="0803 123 4567"
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="notes">
                Notes <span>(Optional)</span>
              </label>
              <input
                type="text"
                id="notes"
                value={notes}
                placeholder="My classmate"
                onChange={(e) => setNotes(e.target.value)}
              />

              <button className="save-btn" onClick={savePerson}>
                Save Person
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default dashboard;
