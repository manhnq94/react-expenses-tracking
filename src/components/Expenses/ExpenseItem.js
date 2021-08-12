import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    // useState function always return an array with 2 elements
    // the first element is the current state with latest value
    // the second element is the function to update that state
    // under the hood, useState function is a Hook.
    // Hook let you use state and other React features without writing a class component
    const [title, setTitle] = useState(props.title);

    const handleChangeTitleClick = () => {
        setTitle("avb");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={handleChangeTitleClick}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
