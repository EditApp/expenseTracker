import React from "react";

export default function Transaction({ transaction }) {
  const negative = transaction.amount < 0;
  const sign = negative ? "-" : "+";
  return (
    <li className={negative ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {" "}
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
}
