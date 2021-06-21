import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { groceryReducer } from '../reducers/groceryReducer.js';

export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {
  const [state, dispatch] = useReducer(groceryReducer, {
    groceries: [
      { id: uuidv4(), title: 'Tomatoes', ready: false },
      { id: uuidv4(), title: 'Cucumbers', ready: false },
      { id: uuidv4(), title: 'Garlic', ready: false },
      { id: uuidv4(), title: 'Onions', ready: false },
      { id: uuidv4(), title: 'Lemons', ready: false },
    ],
  });

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
