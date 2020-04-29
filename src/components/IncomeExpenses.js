import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((amount) => amount.amount);
  const totalIncome = amounts
    .filter((positive) => positive >= 0)
    .reduce((acc, item) => (acc += item), 0);

  const totalOutcome = amounts
    .filter((negative) => negative < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div
      className={`inc-exp-container ${
        totalIncome < Math.abs(totalOutcome) && "alert"
      }`}
    >
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(totalOutcome)}</p>
      </div>
    </div>
  );
}
