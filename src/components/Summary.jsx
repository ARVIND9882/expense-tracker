import React from 'react';

const Summary = ({ expenses,darkMode }) => {
  // Calculate the total expense
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  // Group expenses by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      {/* Total Expenses */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Total Expenses: </p>
        <p className="text-2xl font-bold">₹{total.toFixed(2)}</p>
      </div>

      {/* Expenses by Category */}
      <div>
        <p className="text-lg font-semibold mb-2">Expenses by Category:</p>
        <ul>
          {Object.keys(categoryTotals).map((category) => (
            <li key={category} className="flex justify-between">
              <span className="capitalize">{category}</span>
              <span className="font-semibold">₹{categoryTotals[category].toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
