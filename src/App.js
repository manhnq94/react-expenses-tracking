import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const initialExpenses = [
        {
            id: 0,
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 1,
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: 2,
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 3,
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(initialExpenses);

    const handleSubmit = (newExpense) => {
        console.log(newExpense.title, newExpense.date, newExpense.amount);
        newExpense.id = Math.random().toString();
        newExpense.date = new Date(newExpense.date);
        newExpense.amount = parseFloat(newExpense.amount);

        setExpenses((prevExpenses) => {
            return [...prevExpenses, newExpense];
        });
    };

    return (
        <div>
            <NewExpense onSubmit={handleSubmit} />
            <Expenses expenses={expenses} />
        </div>
    );

    //// under the hood, JSX code transforms to the following React code
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "Let's get started!"),
    //     React.createElement(Expenses, { expenses: expenses })
    // );
}

export default App;
