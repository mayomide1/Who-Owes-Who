import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../src/css/reports.css";
import { transactionHistory } from "./server";

const Reports = () => {
  const foundUser = JSON.parse(localStorage.getItem("active_user"));
  const filteredTransaction = transactionHistory.filter(
    (transaction) => transaction.userId === foundUser.id,
  );

  const owesYou = filteredTransaction.filter(
    (transaction) => transaction.category === "owes you",
  );
  const settled = filteredTransaction.filter(
    (transaction) => transaction.category === "settled",
  );

  let moneyLent = 0;
  for (const whoOwe of owesYou) {
    moneyLent += Number(whoOwe.amount);
  }
  let moneyRecovered = 0;
  for (const settle of settled) {
    moneyRecovered += Number(settle.amount);
  }
  const outstanding = Number(moneyLent - moneyRecovered);
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
                <h1>₦{moneyLent.toLocaleString()}</h1>
              </div>
              <div className="report-summary money-recovered">
                <h4>Money Recovered</h4>
                <h1>₦{moneyRecovered.toLocaleString()}</h1>
              </div>
              <div className="report-summary outstanding">
                <h4>Outstanding</h4>
                <h1>₦{outstanding.toLocaleString()}</h1>
              </div>
            </div>

            <div className="body">
              <div className="reports-people">
                {/* <h2>Top People</h2> */}
                {filteredTransaction.length === 0 ? (
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
                    {filteredTransaction.map((transaction, index) => {
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
                {filteredTransaction.length === 0 ? (
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
