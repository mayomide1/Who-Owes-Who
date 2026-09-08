import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./css/people.css";
import { transactionHistory } from "./server";

import { IoMdArrowDropright } from "react-icons/io";
const People = () => {
  const foundUser = JSON.parse(localStorage.getItem("active_user"));
  const debts = transactionHistory.filter((item) => item.userId === foundUser.id);
  return (
    <>
      <div className="people-page">
        <Sidebar />
        <main>
          <Header />
          
          <div className="people-container"> 
            <h2>People</h2>
            <div className="people">
              {debts.map((person, index) => {
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
                        ₦{person.amount}
                      </h3>
                      <button className="person-arrow-btn">
                        <IoMdArrowDropright />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default People;
