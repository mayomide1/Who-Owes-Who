import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../src/css/reports.css";
import { people, transactions } from "./server";

const Reports = () => {
  const foundUser = JSON.parse(localStorage.getItem("active_user"));
  const loggedUserPeople = people.filter(
    (person) => person.userId === foundUser.id,
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
      totalCredit: amountOwedToYou,
      totalDebt: amountYouOweThem,
      transactions: personTransactions,
    };
  });

  // Calculate totals for the summary cards
  let totalMoneyLent = 0;
  let totalMoneyRecovered = 0;
  let totalOutstanding = 0;

  peopleWithTransactions.forEach((person) => {
    // Add up the GROSS amounts for the summary cards
    totalMoneyLent += person.totalCredit; 
    totalOutstanding += person.totalDebt; 

    // For recovered, we can sum the settled amounts
    totalMoneyRecovered += person.transactions
      .filter(t => t.category === "settled")
      .reduce((sum, t) => sum + Number(t.amount), 0);
  });

  return (
    <>
      <div className="reports-page">
        <Sidebar />
        <main>
          <Header />
          <div className="reports-container">
            <div className="header">
              <h2>Reports</h2>
              <select name="" id="">
                <option value="">This Month</option>
              </select>
            </div>

            <div className="reports-summaries">
              <div className="report-summary money-lent">
                <h4>Money Lent</h4>
                <h1>₦{totalMoneyLent.toLocaleString()}</h1>
              </div>
              <div className="report-summary money-recovered">
                <h4>Money Recovered</h4>
                <h1>₦{totalMoneyRecovered.toLocaleString()}</h1>
              </div>
              <div className="report-summary outstanding">
                <h4>Outstanding</h4>
                <h1>₦{totalOutstanding.toLocaleString()}</h1>
              </div>
            </div>

            <div className="body">
              <div className="reports-people">
                {peopleWithTransactions.length === 0 ? (
                  <main className="empty-card">
                    <div className="person-illustration">
                      <div className="profile-card">
                        <div className="person-head"></div>
                        <div className="person-body"></div>
                      </div>
                      <div className="search-icon"></div>
                    </div>
                    <div className="content">
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
                    {peopleWithTransactions.map((transaction, index) => {
                      return (
                        <div className="person" key={index}>
                          <div className="user">
                            <div className="img-placeholder"></div>
                            <h3>{transaction.name}</h3>
                          </div>
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
                            ₦{transaction.amount.toLocaleString()}
                          </h3>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              <div className="graph">
                {peopleWithTransactions.length === 0 ? (
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
                    <h2>This is graph</h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Reports;