import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { generateID } from "../helpers/idGenerator";
//initial satte
const initialState = {
  transactions: [
    { id: generateID(), text: "Salary E", amount: 1700 },
    { id: generateID(), text: "Salary Z", amount: 1850 },
    { id: generateID(), text: "CAF", amount: 145 },
    //credits
    { id: generateID(), text: "Credit Immo", amount: -1200 },
    { id: generateID(), text: "Conso", amount: -118 },
    { id: generateID(), text: "Fenetres", amount: -100 },
    //maison
    { id: generateID(), text: "Edf", amount: -180 },
    { id: generateID(), text: "Saur", amount: -117 },
    { id: generateID(), text: "Impots", amount: -140 },
    { id: generateID(), text: "Gmf", amount: -60 },
    { id: generateID(), text: "Free", amount: -40 },
    //Persos
    { id: generateID(), text: "Navigo", amount: -150 },
    { id: generateID(), text: "Telephones", amount: -50 },
    { id: generateID(), text: "Mutuelle Z", amount: -45 },
    { id: generateID(), text: "Antarius", amount: -110 },
    { id: generateID(), text: "Nounou", amount: -450 },
    { id: generateID(), text: "Ecole", amount: -100 },
    //Bouffe
    { id: generateID(), text: "Alim", amount: -800 },
  ],
};

//create cotext

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  //need access to state and dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //action

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
