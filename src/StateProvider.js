import React, { createContext, useContext, useReducer } from "react";

// Prepares data layer
export const StateContext = createContext();

// Wrap the whole app to provide data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);
