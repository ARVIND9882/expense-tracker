import React, { useState } from "react";

function AddExpenseForm({ addExpense, darkMode }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      ...form,
      id: Date.now(),
    });
    setForm({
      name: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        darkMode
          ? "bg-darkSecondary text-lightAccent"
          : "bg-white text-gray-700"
      } p-6 rounded-lg shadow-md max-w-md mx-auto transition-colors duration-300`}
    >
      <h2
        className={`${
          darkMode ? "text-lightAccent" : "text-gray-700"
        } text-xl font-semibold mb-4 text-center`}
      >
        Add New Expense
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label
            className={`${
              darkMode ? "text-lightAccent" : "text-gray-600"
            } font-medium mb-1`}
          >
            Expense Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter expense name"
            className={`${
              darkMode
                ? "bg-darkPrimary text-lightAccent border-gray-600"
                : "bg-white border-gray-300"
            } border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`${
              darkMode ? "text-lightAccent" : "text-gray-600"
            } font-medium mb-1`}
          >
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className={`${
              darkMode
                ? "bg-darkPrimary text-lightAccent border-gray-600"
                : "bg-white border-gray-300"
            } border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        <div className="flex flex-col">
          <label
            className={`${
              darkMode ? "text-lightAccent" : "text-gray-600"
            } font-medium mb-1`}
          >
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`${
              darkMode
                ? "bg-darkPrimary text-lightAccent border-gray-600"
                : "bg-white border-gray-300"
            } border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Travel">Travel</option>
            <option value="Food">Food & Dining</option>
            <option value="Shopping">Clothing & Apparel</option>
            <option value="grocery">Groceries</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className={`${
              darkMode ? "text-lightAccent" : "text-gray-600"
            } font-medium mb-1`}
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={`${
              darkMode
                ? "bg-darkPrimary text-lightAccent border-gray-600"
                : "bg-white border-gray-300"
            } border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`${
          darkMode
            ? "bg-lightAccent text-darkPrimary hover:bg-darkPrimary hover:text-lightAccent"
            : "bg-darkBlue text-white hover:bg-lightBlue hover:text-darkBlue"
        } w-full py-2 mt-4 rounded-lg  transition duration-200`}
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;
