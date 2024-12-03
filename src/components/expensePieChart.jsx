import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

Chartjs.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
  // Group expenses by category and sum their amounts
  const categoryTotals = groupExpensesByCategory(expenses);

  const labels = Object.keys(categoryTotals); // Category names
  const data = Object.values(categoryTotals); // Total amounts per category
  const colors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
  ];

  const pieChartData = {
    labels: labels,
    datasets: [
      {
        label: "Expenses by Category",
        data: data,
        backgroundColor: colors,
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const category = tooltipItem.label;
            const amount = tooltipItem.raw.toFixed(2);
            return `${category}: $${amount}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No expenses added yet. Add some expenses to see the breakdown!
        </p>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-center mb-4">Expense Breakdown</h2>
          <Pie data={pieChartData} options={options} />
        </>
      )}
    </div>
  );
};

const groupExpensesByCategory = (expenses) => {
  const categoryTotals = {};

  expenses.forEach((expense) => {
    const amount = parseFloat(expense.amount); // Ensure amount is a number
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += amount;
  });

  return categoryTotals;
};

export default ExpensePieChart;
