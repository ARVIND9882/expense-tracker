import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ExpensePieChart from "./components/ExpensePieChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-darkPrimary text-lightAccent"
          : "bg-white text-darkPrimary"
      } min-h-screen`}
    >
      <Header darkMode={darkMode} />
      <div className="container mx-auto p-6">
        {/* Toggle Button */}
        <div className="text-right mb-6">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded bg-lightBlue text-darkBlue hover:bg-lightAccent transition"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* Form Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Add a New Expense
          </h2>
          <AddExpenseForm addExpense={addExpense} darkMode={darkMode} />
        </section>

        {/* Dashboard Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expense List */}
          <div
            className={`lg:col-span-2 p-6 rounded-lg shadow-lg ${
              darkMode
                ? "bg-darkSecondary text-lightAccent"
                : "bg-lightBlue text-darkBlue"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Expense List
            </h2>
            <ExpenseList expenses={expenses} darkMode={darkMode} />
          </div>

          {/* Summary */}
          <div
            className={`lg:col-span-1 p-6 rounded-lg shadow-lg ${
              darkMode
                ? "bg-darkSecondary text-lightAccent"
                : "bg-lightBlue text-darkBlue"
            }`}
          >
            <h2
              className={`${
                darkMode ? "text-lightAccent" : "text-darkBlue"
              } text-2xl font-semibold mb-4 text-center`}
            >
              Summary
            </h2>
            <Summary expenses={expenses} />
          </div>
        </section>

        {/* Chart Section */}
        <section className="mt-8">
          <h2
            className={`${
              darkMode ? "text-lightAccent" : "text-darkBlue"
            } text-2xl font-semibold mb-4 text-center`}
          >
            Expense Analysis
          </h2>
          <div
            className={`${
              darkMode
                ? "bg-darkSecondary text-lightAccent"
                : "bg-lightBlue text-darkBlue"
            } p-8 rounded-lg shadow-lg`}
          >
            <ExpensePieChart expenses={expenses} />
          </div>
        </section>
      </div>
      <footer className="text-center py-4 bg-gray-800 text-white">
  Built with ❤️ by Arvind Pardeshi | <a href="https://github.com/ARVIND9882" target="_blank" className="underline">GitHub</a>
</footer>

    </div>
  );
}

export default App;
