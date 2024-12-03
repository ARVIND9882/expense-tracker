import React from "react";

function ExpenseList({ expenses, darkMode }) {
  return (
    <div>
      <h2
        className={`${
          darkMode ? "text-darkSecondary" : "text-darkBlue"
        } text-xl font-bold mb-4`}
      >
        Expenses
      </h2>
      {expenses.length === 0 ? (
        <p
          className={`${
            darkMode ? "text-lightAccent" : "text-darkBlue"
          } text-center italic`}
        >
          No expenses added yet. Start by adding your first expense!
        </p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className={`${
                darkMode
                  ? "bg-darkSecondary text-lightAccent"
                  : "bg-lightBlue text-darkBlue"
              } p-4 shadow rounded mb-2 transition-colors duration-300`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">{expense.name}</p>
                  <p>{expense.category}</p>
                </div>
                <div>
                  <p>₹{expense.amount}</p>
                  <p>{expense.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
