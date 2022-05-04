import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = (reducer, initialState, children) => { //comes from reducer.js and initialState.js, children is all our components 
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//custom hook
export const useStateValue = () => useContext(StateContext);
  