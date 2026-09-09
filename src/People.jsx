import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./css/people.css";
import "./css/noPerson.css";
import { people, transactions } from "./server";

import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const People = () => {
  const navigate = useNavigate();
  const foundUser = JSON.parse(localStorage.getItem("active_user"));
  const loggedUserPeople = people.filter(
    (item) => item.userId === foundUser.id,
  );

  const peopleWithTransactions = loggedUserPeople.map((person) => {
    
    const personTransactions = transactions.filter((transaction) => 
      transaction.personId === person.id
    )
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




  
  return (
    <>
      <div className="people-page">
        <Sidebar />
        <main>
          <Header />
          <div className="people-container">
            <h2>People</h2>
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
              <div className="people">
                {peopleWithTransactions.map((person, index) => {
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
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default People;
