import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={props.onSubmit} />
        </div>
    );
};

export default NewExpense;
