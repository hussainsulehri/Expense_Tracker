import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions
    .map(transaction => transaction.amount)
    .filter(val => typeof val === 'number');

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div>
      <div className="inc-exp-container fade-in">
        <div className="income">
          <h4>Income</h4>
          <p className="money plus">+{numberWithCommas(income)}</p>
        </div>
        <div className="expense">
          <h4>Expense</h4>
          <p className="money minus">-{numberWithCommas(expense)}</p>
        </div>
      </div>
    </div>
  );
};
