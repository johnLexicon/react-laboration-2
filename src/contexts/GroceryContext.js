import { createContext, useReducer } from 'react';
import { groceryReducer } from '../reducers/groceryReducer.js';

export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {
  const [state, dispatch] = useReducer(groceryReducer, { groceries: null });

  return (
    <GroceryContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GroceryContext.Provider>
  );
};

export default GroceryContextProvider;
