import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [state, setState] = useState({
        title: "",
        date: "",
        amount: 0,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(state);
    };

    const handleChange = (event) => {
        // if we update state that depends on previous state, we should use array function to update
        // because React set state on schedule, not imediately,
        // there for if we directly use the current state to update state, it could be out-dated state
        setState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        name="amount"
                        onChange={handleChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        name="date"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
