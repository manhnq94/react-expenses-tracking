import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2021");

    const handleFilterYearChange = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = <p>No expenses found!</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            );
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilterYearChange={handleFilterYearChange}
                currentSelectedYear={filterYear}
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;
