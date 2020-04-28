import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial satte
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create cotext

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  //need access to state and dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
