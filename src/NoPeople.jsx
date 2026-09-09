import React from 'react'

const NoPeople = () => {
  return (
    <>
<main class="transaction-card">

        <div class="illustration">
            <div class="wallet">
                <div class="wallet-flap"></div>
                <div class="wallet-button"></div>
            </div>

            <div class="plus">+</div>
        </div>

        <div class="content">
            <h2>No Transactions Yet</h2>

            <p>
                You haven't added any transactions.<br/>
                Let's get started.
            </p>

            <button>Add Transaction</button>
        </div>

    </main>
    </>
  )
}

export default NoPeople