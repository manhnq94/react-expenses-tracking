import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
