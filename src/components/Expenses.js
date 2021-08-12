import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => {
                return (
                    <ExpenseItem
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
