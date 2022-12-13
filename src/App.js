import Expenses from "./components/Expense/Expenses";
import Header from "./components/Header";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <Header />
      <NewExpense />
      <Expenses />
    </div>
  );
};

App();

export default App;
