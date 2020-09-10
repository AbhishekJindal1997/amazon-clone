import React, { createContext, useContext, useReducer } from "react";

//This is Data Layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//use inside a component
export const useStateValue = () => useContext(StateContext);
