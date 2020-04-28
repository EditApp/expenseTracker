import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const reducer = (acc, item) => (acc += item);

  const amounts = transactions.map((amount) => amount.amount);
  const totalIncome = amounts
    .filter((positive) => positive >= 0)
    .reduce(reducer);

  const totalOutcome = amounts
    .filter((negative) => negative < 0)
    .reduce(reducer);

  return (
    <div className="inc-exp-container">
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
