import React, { useState } from "react";

function Header({ darkMode }) {
  return (
    <header
      className={`py-6 shadow-md transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-darkPrimary to-darkSecondary text-lightAccent"
          : "bg-gradient-to-r from-darkBlue to-lightBlue text-white"
      }`}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Personal Expense Tracker
        </h1>
        <p className="text-sm md:text-base font-medium mt-2">
          Organize your expenses efficiently and effortlessly!
        </p>
      </div>
    </header>
  );
}

export default Header;
