export const user = [
    {
        id: 1,
        firstName: "Ayomide",
        surname: "Mamukuyomi",
        email: "ayomidemamukuyomi5@gmail.com",
        phone: "07016197076",
        password: "password",
    },
    {
        id: 2,
        firstName: "Emmanuel",
        surname: "Mamukuyomi",
        email: "ayomidemamukuyomi6@gmail.com",
        phone: "08024454940",
        password: "password",
    }
]

export const transactionHistory = [
    // Ayomide's transactions (userId: 1)
    {
        id: 1,
        userId: 1,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",        // "you owe", "owes you", or "settled"
        amount: 5000,
        date: "1 Sept, 2026",
        notes: "Lunch payment",
        type: "debit",              // debit = money going out
        status: "pending"
    },
    {
        id: 2,
        userId: 1,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 3000,
        date: "2 Sept, 2026",
        notes: "Groceries",
        type: "credit",             // credit = money coming in
        status: "completed"
    },
    {
        id: 3,
        userId: 1,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",
        amount: 2000,
        date: "3 Sept, 2026",
        notes: "Transport fare",
        type: "debit",
        status: "completed"
    },
    {
        id: 4,
        userId: 1,
        name: "Esther",
        phone: "08024454940",
        category: "owes you",
        amount: 15000,
        date: "4 Sept, 2026",
        notes: "Project payment",
        type: "credit",
        status: "pending"
    },
    {
        id: 5,
        userId: 1,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 7500,
        date: "5 Sept, 2026",
        notes: "Shopping refund",
        type: "credit",
        status: "completed"
    },
    {
        id: 6,
        userId: 1,
        name: "Fikayomi",
        phone: "08024454940",
        category: "owes you",
        amount: 10000,
        date: "6 Sept, 2026",
        notes: "Rent share",
        type: "credit",
        status: "pending"
    },
    {
        id: 7,
        userId: 1,
        name: "Xexes",
        phone: "08024454940",
        category: "owes you",
        amount: 4500,
        date: "7 Sept, 2026",
        notes: "Movie tickets",
        type: "credit",
        status: "completed"
    },
    {
        id: 8,
        userId: 1,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",
        amount: 8500,
        date: "8 Sept, 2026",
        notes: "Phone repair",
        type: "debit",
        status: "pending"
    },
    {
        id: 9,
        userId: 1,
        name: "Esther",
        phone: "08024454940",
        category: "settled",
        amount: 2000,
        date: "9 Sept, 2026",
        notes: "Esther repayment",
        type: "debit",
        status: "completed"
    },
    {
        id: 10,
        userId: 1,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 12000,
        date: "10 Sept, 2026",
        notes: "School fees balance",
        type: "credit",
        status: "pending"
    },

    // Emmanuel's transactions (userId: 2)
    {
        id: 1,
        userId: 2,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",        // "you owe", "owes you", or "settled"
        amount: 5000,
        date: "1 Sept, 2026",
        notes: "Lunch payment",
        type: "debit",              // debit = money going out
        status: "pending"
    },
    {
        id: 2,
        userId: 2,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 3000,
        date: "2 Sept, 2026",
        notes: "Groceries",
        type: "credit",             // credit = money coming in
        status: "completed"
    },
    {
        id: 3,
        userId: 2,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",
        amount: 2000,
        date: "3 Sept, 2026",
        notes: "Transport fare",
        type: "debit",
        status: "completed"
    },
    {
        id: 4,
        userId: 2,
        name: "Esther",
        phone: "08024454940",
        category: "owes you",
        amount: 15000,
        date: "4 Sept, 2026",
        notes: "Project payment",
        type: "credit",
        status: "pending"
    },
    {
        id: 5,
        userId: 2,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 7500,
        date: "5 Sept, 2026",
        notes: "Shopping refund",
        type: "credit",
        status: "completed"
    },
    {
        id: 6,
        userId: 2,
        name: "Fikayomi",
        phone: "08024454940",
        category: "owes you",
        amount: 10000,
        date: "6 Sept, 2026",
        notes: "Rent share",
        type: "credit",
        status: "pending"
    },
    {
        id: 7,
        userId: 2,
        name: "Xexes",
        phone: "08024454940",
        category: "owes you",
        amount: 4500,
        date: "7 Sept, 2026",
        notes: "Movie tickets",
        type: "credit",
        status: "completed"
    },
    {
        id: 8,
        userId: 2,
        name: "Emmanuel",
        phone: "08024454940",
        category: "you owe",
        amount: 8500,
        date: "8 Sept, 2026",
        notes: "Phone repair",
        type: "debit",
        status: "pending"
    },
    {
        id: 9,
        userId: 2,
        name: "Esther",
        phone: "08024454940",
        category: "settled",
        amount: 2000,
        date: "9 Sept, 2026",
        notes: "Esther repayment",
        type: "debit",
        status: "completed"
    },
    {
        id: 10,
        userId: 2,
        name: "Mum",
        phone: "08024454940",
        category: "owes you",
        amount: 12000,
        date: "10 Sept, 2026",
        notes: "School fees balance",
        type: "credit",
        status: "pending"
    },
];