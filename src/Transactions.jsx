import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { transactionHistory } from "./server";
import "../src/css/transactions.css";
const Transactions = () => {
  const [activeButton, setActiveButton] = useState("all");
  const foundUser = JSON.parse(localStorage.getItem("active_user"));
  let filteredTransactions = transactionHistory.filter(
    (item) => item.userId === foundUser.id,
  );

  if (activeButton === "owes_me"){
    filteredTransactions = filteredTransactions.filter(transaction => transaction.category === "owes you" )
  } else if(activeButton === "you_owe"){
    filteredTransactions = filteredTransactions.filter(transaction => transaction.category === "you owe" )
  }else if(activeButton === "settled"){
filteredTransactions = filteredTransactions.filter(transaction => transaction.category === "settled" )
}  else{
  filteredTransactions
}

  return (
    <>
      <div className="transaction-page">
        <Sidebar />
        <main>
          <Header />
          <div className="transaction-container">
            <h2>All Transactions</h2>
            <div className="filter-container">
              <button
                onClick={() => setActiveButton("all")}
                className={activeButton === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => setActiveButton("owes_me")}
                className={activeButton === "owes_me" ? "active" : ""}
              >
                Owes Me
              </button>
              <button
                onClick={() => setActiveButton("you_owe")}
                className={activeButton === "you_owe" ? "active" : ""}
              >
                I Owe
              </button>
              <button
                onClick={() => setActiveButton("settled")}
                className={activeButton === "settled" ? "active" : ""}
              >
                Settled
              </button>
            </div>
            <div className="transactions">
              {filteredTransactions.map((transaction, index) => {
                return (
                  <div className="history" key={index}>
                    <div className="history-left">
                      <div className="img-placeholder"></div>
                      <div className="history-info">
                        <h3 className="day">{transaction.name}</h3>
                        <p
                          style={{
                            color:
                              transaction.category === "owes you"
                                ? "#0B6623"
                                : transaction.category === "you owe"
                                  ? "#FF0000"
                                  : "#6366F1",
                          }}
                        >
                          {transaction.category}
                        </p>
                      </div>
                    </div>
                    <div className="history-right">
                      <h3
                        style={{
                          color:
                            transaction.category === "owes you"
                              ? "#0B6623"
                              : transaction.category === "you owe"
                                ? "#FF0000"
                                : "#6366F1",
                        }}
                      >
                        ₦{transaction.amount}
                      </h3>
                      <p>{transaction.date}</p>
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

export default Transactions;
