import { createContext, useReducer } from 'react';
import { groceryReducer } from '../reducers/groceryReducer';
import { IGroceryState } from '../interfaces/IGroceryState';
import { IGroceryContext } from '../interfaces/IGroceryContext';

interface IProps {
  children: React.ReactNode;
}

export const GroceryContext = createContext<undefined | IGroceryContext>(
  undefined
);

const initialState: IGroceryState = {
  groceries: [],
  editedGroceryId: null
};

const GroceryContextProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(groceryReducer, initialState);

  return (
    <GroceryContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </GroceryContext.Provider>
  );
};

export default GroceryContextProvider;
