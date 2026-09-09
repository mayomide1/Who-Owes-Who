import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { people, transactions} from "./server";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowUp, FaArrowDown, FaArrowsAltV } from "react-icons/fa";
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
  const loggedUser = JSON.parse(localStorage.getItem("active_user"));
    const navigate = useNavigate();

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

  const loggedUserPeople = people.filter(
    (people) => people.userId === loggedUser.id,
  );

  const peopleWithTransactions = loggedUserPeople.map((person) => {
    
    const personTransactions = transactions.filter(
      (transaction) => transaction.personId === person.id
    );

    let amountOwedToYou = 0;
    let amountYouOweThem = 0;
    let totalSettled = 0;

    personTransactions.forEach((transaction) => {
      const amount = Number(transaction.amount);

      if (transaction.category === "owes you") amountOwedToYou += amount;
      if (transaction.category === "you owe") amountYouOweThem += amount;
      if (transaction.category === "settled") totalSettled += amount;
    });

    let category = "settled";
    if (amountOwedToYou > amountYouOweThem) {
      category = "owes you";
      amountOwedToYou -= amountYouOweThem; // Net amount
      amountYouOweThem = 0;
    } else if (amountYouOweThem > amountOwedToYou) {
      category = "you owe";
      amountYouOweThem -= amountOwedToYou; // Net amount
      amountOwedToYou = 0;
    }

    return {
      ...person,
      category: category,
      amount: category === "owes you" ? amountOwedToYou : amountYouOweThem,
      transactions: personTransactions,
    };
  });

  // 6. Calculate Global Totals (for the Summary Cards)
  // We iterate through our new combined array
  let totalOwesYou = 0;
  let totalYouOwe = 0;
  let totalSettled = 0;

  peopleWithTransactions.forEach((person) => {
    if (person.category === "owes you") totalOwesYou += person.amount;
    if (person.category === "you owe") totalYouOwe += person.amount;
    if (person.category === "settled") totalSettled += person.amount;
  });

  // 7. Filter for the Recent Activity (Global transactions for the logged user's people)
  const loggedUserPeopleIds = loggedUserPeople.map(person => person.id);
  const loggedUserTransactions = transactions.filter(t => loggedUserPeopleIds.includes(t.personId));

  const owesYou = peopleWithTransactions.filter(p => p.category === "owes you");
  const youOwe = peopleWithTransactions.filter(p => p.category === "you owe");
  const settled = peopleWithTransactions.filter(p => p.category === "settled");
  
  let amountOwed = totalOwesYou;
  let amountIOwe = totalYouOwe;
  let settledAmount = totalSettled;

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <main>
          <Header />
          <h2>Dashboard</h2>
          <div className="summary-cards">
            <div className="summary-card owes-me">
              <div className="summary-card-header">
                <p>People Owe Me</p>
                <div>
                  <FaArrowUp />
                </div>
              </div>
              <h1>₦{amountOwed.toLocaleString()}</h1>
              <p>
                Total from {owesYou.length}{" "}
                {owesYou.length <= 1 ? "person" : "people"}
              </p>
            </div>
            <div className="summary-card i-owe">
              <div className="summary-card-header">
                <p>I owe people</p>
                <div>
                  <FaArrowDown />
                </div>
              </div>
              <h1>₦{amountIOwe.toLocaleString()}</h1>
              <p>
                Total from {youOwe.length}{" "}
                {youOwe.length <= 1 ? "person" : "people"}
              </p>
            </div>
            <div className="summary-card settled">
              <div className="summary-card-header">
                <p>Settled Transaction</p>
                <div>
                  <FaArrowsAltV />
                </div>
              </div>
              <h1>₦{settledAmount.toLocaleString()}</h1>
              <p>
                Total from {settled.length}{" "}
                {settled.length <= 1 ? "person" : "people"}
              </p>
            </div>
          </div>

          <div className="dashboard-body">
            <div className="people">
              <div className="head">
                <h3>People</h3>
                <button onClick={() => navigate("/people")}>View All</button>
              </div>
              {peopleWithTransactions.length === 0 ? (
                <main class="empty-card">
                  <div class="person-illustration">
                    <div class="profile-card">
                      <div class="person-head"></div>
                      <div class="person-body"></div>
                    </div>

                    <div class="search-icon"></div>
                  </div>

                  <div class="content">
                    <h2>No People Found</h2>

                    <p>
                      We couldn't find anyone
                      <br />
                      Let's get started.
                    </p>

                    <button>Add Transaction</button>
                  </div>
                </main>
              ) : (
                <>
                  {peopleWithTransactions.slice(0, 5).map((person, index) => {
                    return (
                      <div
                        key={index}
                        className="person-card"
                        onClick={() => navigate(`/person/${person.id}`)}
                      >
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
                                    : person.category === "you owe"
                                      ? "#FF0000"
                                      : "#6366F1",
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
                                  : person.category === "you owe"
                                    ? "#FF0000"
                                    : "#6366F1",
                            }}
                          >
                            ₦{person.amount.toLocaleString()}
                          </h3>
                          <button className="person-arrow">
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
                </>
              )}
            </div>

            <div className="histories">
              <div className="head">
                <h3>Recent Activity</h3>
                <button onClick={() => navigate("/transactions")}>
                  View All
                </button>
              </div>
              <div className="body">
                {loggedUserTransactions.length === 0 ? (
                  <main className="transaction-card">
                    <div className="illustration">
                      <div className="wallet">
                        <div className="wallet-flap"></div>
                        <div className="wallet-button"></div>
                      </div>

                      <div className="plus">+</div>
                    </div>

                    <div className="content">
                      <h2>No Transactions Yet</h2>

                      <p>
                        You haven't added any transactions.
                        <br />
                        Let's get started.
                      </p>

                      <button>Add Transaction</button>
                    </div>
                  </main>
                ) : (
                  <>
                    {loggedUserTransactions.slice(0, 5).map((transaction, index) => {
                      const personName = people.find(p => p.id === transaction.personId)?.name || "Unknown";
                      return (
                        <div className="history" key={index}>
                          <div className="img-placeholder"></div>
                          <div className="history-info">
                            <p className="day">{transaction.date}</p>
                            <p>
                              {personName} {transaction.category} ₦
                              {transaction.amount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
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
