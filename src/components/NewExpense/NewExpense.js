import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [hideForm, setHideForm] = useState(true);

    const handleShowForm = () => {
        setHideForm(false);
    };

    const handleHideForm = () => {
        setHideForm(true);
    };

    let expenseFormContent = (
        <button onClick={handleShowForm}>Add New Expense</button>
    );

    if (hideForm == false) {
        expenseFormContent = (
            <ExpenseForm onSubmit={props.onSubmit} onCancel={handleHideForm} />
        );
    }

    return <div className="new-expense">{expenseFormContent}</div>;
};

export default NewExpense;
