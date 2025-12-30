import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Header = () => {
  const { clearTransactions } = useContext(GlobalContext);

  const onReset = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      clearTransactions();
    }
  };

  return (
    <div className="header-container">
      <h1>Expense Tracker</h1>
      <button className="reset-btn" onClick={onReset} title="Reset all data">
        <span role="img" aria-label="reset">🔄</span> Reset
      </button>
    </div>
  );
};
