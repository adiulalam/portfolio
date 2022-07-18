import React, { createContext, useReducer } from 'react';

const intialState = {
  portfolio_content: {},
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_PORTFOLIO_CONTENT':
      return {
        ...state,
        portfolio_content: payload,
      };
    default:
      return state;
  }
};

export const PortfolioContext = createContext(intialState);

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const dispatches = {
    setPortfolioContent(data) {
      dispatch({
        type: 'SET_PORTFOLIO_CONTENT',
        payload: data,
      });
    },
  };
  return (
    <PortfolioContext.Provider value={{ ...state, ...dispatches }}>
      {children}
    </PortfolioContext.Provider>
  );
};
