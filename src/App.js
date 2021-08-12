import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            title: "Car Insurance",
            amount: 2134.1,
            date: new Date(2021, 2, 28),
        },
        {
            title: "Car Insurance",
            amount: 2134.1,
            date: new Date(2021, 2, 28),
        },
        {
            title: "Car Insurance",
            amount: 2134.1,
            date: new Date(2021, 2, 28),
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                date={expenses[0].date}
                title={expenses[0].title}
                amount={expenses[0].amount}
            />
            <ExpenseItem
                date={expenses[1].date}
                title={expenses[1].title}
                amount={expenses[1].amount}
            />
            <ExpenseItem
                date={expenses[2].date}
                title={expenses[2].title}
                amount={expenses[2].amount}
            />
        </div>
    );
}

export default App;
