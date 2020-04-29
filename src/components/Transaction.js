import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const negative = transaction.amount < 0;
  const sign = negative ? "-" : "+";
  return (
    <li className={negative ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {" "}
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
