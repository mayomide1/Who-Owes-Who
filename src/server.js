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
    },
    {
        id: 3,
        firstName: "Fikayomi",
        surname: "Mamukuyomi",
        email: "ayomidemamukuyomi@gmail.com",
        phone: "07016197074",
        password: "password",
    },
]

export const people = [
    {
        id: 1,
        userId: 1,
        name: "Emmanuel",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 2,
        userId: 1,
        name: "Mum",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 3,
        userId: 1,
        name: "Xexes",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 4,
        userId: 1,
        name: "Fikayomi",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 5,
        userId: 1,
        name: "Esther",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 6,
        userId: 2,
        name: "Emmanuel",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 7,
        userId: 2,
        name: "Mum",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 8,
        userId: 2,
        name: "Xexes",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 9,
        userId: 2,
        name: "Fikayomi",
        phone: "08024454940",
        notes: "",
    },
    {
        id: 10,
        userId: 2,
        name: "Esther",
        phone: "08024454940",
        notes: "",
    },
];

export const transactions = [
    // Person 1 - Emmanuel (userId: 1)
    { id: 101, personId: 1, amount: "15000", description: "Dinner at Italian restaurant", date: "1 Sept, 2026", category: "owes you" },
    { id: 102, personId: 1, amount: "5000", description: "Bolt ride", date: "2 Sept, 2026", category: "owes you" },
    { id: 103, personId: 1, amount: "3000", description: "MTN Airtime", date: "3 Sept, 2026", category: "owes you" },
    { id: 104, personId: 1, amount: "20000", description: "Data subscription", date: "4 Sept, 2026", category: "owes you" },
    { id: 105, personId: 1, amount: "12000", description: "Lunch at Bukka", date: "5 Sept, 2026", category: "owes you" },
    { id: 106, personId: 1, amount: "25000", description: "Movie tickets", date: "6 Sept, 2026", category: "you owe" },

    // Person 2 - Mum (userId: 1)
    { id: 107, personId: 2, amount: "5000", description: "Groceries", date: "1 Sept, 2026", category: "owes you" },
    { id: 108, personId: 2, amount: "3000", description: "Electricity bill", date: "3 Sept, 2026", category: "owes you" },
    { id: 109, personId: 2, amount: "8000", description: "Market shopping", date: "5 Sept, 2026", category: "owes you" },
    { id: 110, personId: 2, amount: "4000", description: "Gas refill", date: "7 Sept, 2026", category: "owes you" },
    { id: 111, personId: 2, amount: "10000", description: "Medicine", date: "9 Sept, 2026", category: "owes you" },
    { id: 112, personId: 2, amount: "15000", description: "Furniture repair", date: "10 Sept, 2026", category: "you owe" },

    // Person 3 - Xexes (userId: 1)
    { id: 113, personId: 3, amount: "2000", description: "Coffee meetup", date: "2 Sept, 2026", category: "owes you" },
    { id: 114, personId: 3, amount: "7000", description: "Cinema", date: "4 Sept, 2026", category: "owes you" },
    { id: 115, personId: 3, amount: "10000", description: "Concert ticket", date: "6 Sept, 2026", category: "owes you" },
    { id: 116, personId: 3, amount: "3500", description: "Pizza delivery", date: "8 Sept, 2026", category: "owes you" },
    { id: 117, personId: 3, amount: "6000", description: "Barber visit", date: "10 Sept, 2026", category: "owes you" },
    { id: 118, personId: 3, amount: "22000", description: "Phone repair", date: "11 Sept, 2026", category: "you owe" },

    // Person 4 - Fikayomi (userId: 1)
    { id: 119, personId: 4, amount: "8000", description: "Spa treatment", date: "1 Sept, 2026", category: "owes you" },
    { id: 120, personId: 4, amount: "4500", description: "Book purchase", date: "3 Sept, 2026", category: "owes you" },
    { id: 121, personId: 4, amount: "30000", description: "Dress shopping", date: "5 Sept, 2026", category: "owes you" },
    { id: 122, personId: 4, amount: "2500", description: "Ice cream", date: "7 Sept, 2026", category: "owes you" },
    { id: 123, personId: 4, amount: "12000", description: "Facial treatment", date: "9 Sept, 2026", category: "owes you" },
    { id: 124, personId: 4, amount: "18000", description: "Shoe purchase", date: "11 Sept, 2026", category: "you owe" },

    // Person 5 - Esther (userId: 1)
    { id: 125, personId: 5, amount: "5000", description: "Chapel offering", date: "2 Sept, 2026", category: "owes you" },
    { id: 126, personId: 5, amount: "7500", description: "Hospitality", date: "4 Sept, 2026", category: "owes you" },
    { id: 127, personId: 5, amount: "10000", description: "Ministry materials", date: "6 Sept, 2026", category: "owes you" },
    { id: 128, personId: 5, amount: "3000", description: "Transport for outreach", date: "8 Sept, 2026", category: "owes you" },
    { id: 129, personId: 5, amount: "8500", description: "Conference fees", date: "10 Sept, 2026", category: "owes you" },
    { id: 130, personId: 5, amount: "15000", description: "Church event", date: "12 Sept, 2026", category: "you owe" },

    // Person 6 - Emmanuel (userId: 2)
    { id: 131, personId: 6, amount: "10000", description: "Dinner", date: "1 Sept, 2026", category: "owes you" },
    { id: 132, personId: 6, amount: "7000", description: "Fuel", date: "3 Sept, 2026", category: "owes you" },
    { id: 133, personId: 6, amount: "4000", description: "Car wash", date: "5 Sept, 2026", category: "owes you" },
    { id: 134, personId: 6, amount: "25000", description: "Car maintenance", date: "7 Sept, 2026", category: "owes you" },
    { id: 135, personId: 6, amount: "3000", description: "Parker fee", date: "9 Sept, 2026", category: "owes you" },
    { id: 136, personId: 6, amount: "12000", description: "Tyre replacement", date: "11 Sept, 2026", category: "you owe" },

    // Person 7 - Mum (userId: 2)
    { id: 137, personId: 7, amount: "20000", description: "Bulk food items", date: "2 Sept, 2026", category: "owes you" },
    { id: 138, personId: 7, amount: "15000", description: "Water bill", date: "4 Sept, 2026", category: "owes you" },
    { id: 139, personId: 7, amount: "5000", description: "Meat", date: "6 Sept, 2026", category: "owes you" },
    { id: 140, personId: 7, amount: "3000", description: "Vegetables", date: "8 Sept, 2026", category: "owes you" },
    { id: 141, personId: 7, amount: "8000", description: "Cooking gas", date: "10 Sept, 2026", category: "owes you" },
    { id: 142, personId: 7, amount: "10000", description: "Kitchen utensils", date: "12 Sept, 2026", category: "you owe" },

    // Person 8 - Xexes (userId: 2)
    { id: 143, personId: 8, amount: "500", description: "Bread and tea", date: "3 Sept, 2026", category: "owes you" },
    { id: 144, personId: 8, amount: "2000", description: "Phone call credit", date: "5 Sept, 2026", category: "owes you" },
    { id: 145, personId: 8, amount: "1000", description: "Pure water", date: "7 Sept, 2026", category: "owes you" },
    { id: 146, personId: 8, amount: "4000", description: "Soap", date: "9 Sept, 2026", category: "owes you" },
    { id: 147, personId: 8, amount: "7000", description: "Detergent", date: "11 Sept, 2026", category: "owes you" },
    { id: 148, personId: 8, amount: "3000", description: "Disinfectant", date: "13 Sept, 2026", category: "you owe" },

    // Person 9 - Fikayomi (userId: 2)
    { id: 149, personId: 9, amount: "4500", description: "Chapel service", date: "2 Sept, 2026", category: "owes you" },
    { id: 150, personId: 9, amount: "6000", description: "Youth fellowship", date: "4 Sept, 2026", category: "owes you" },
    { id: 151, personId: 9, amount: "8000", description: "Music instruments", date: "6 Sept, 2026", category: "owes you" },
    { id: 152, personId: 9, amount: "2500", description: "Printer paper", date: "8 Sept, 2026", category: "owes you" },
    { id: 153, personId: 9, amount: "10000", description: "Bible study materials", date: "10 Sept, 2026", category: "owes you" },
    { id: 154, personId: 9, amount: "7500", description: "Prayer retreat", date: "12 Sept, 2026", category: "you owe" },
];