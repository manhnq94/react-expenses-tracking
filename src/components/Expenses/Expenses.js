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

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilterYearChange={handleFilterYearChange}
                currentSelectedYear={filterYear}
            />
            {filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                );
            })}
        </Card>
    );
}

export default Expenses;
