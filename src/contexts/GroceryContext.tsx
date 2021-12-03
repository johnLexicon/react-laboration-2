import { createContext, useReducer } from 'react';
import { groceryReducer } from '../reducers/groceryReducer';
import { IGroceryState, IGroceryAction } from '../interfaces/groceryInterfaces';

export const GroceryContext = createContext<{
  state: IGroceryState;
  dispatch: React.Dispatch<IGroceryAction>;
}>({
  state: { groceries: [], editedGroceryId: undefined },
  dispatch: () => undefined
});

const initialState: IGroceryState = {
  groceries: [],
  editedGroceryId: null
};

const GroceryContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(groceryReducer, initialState);

  return (
    <GroceryContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GroceryContext.Provider>
  );
};

export default GroceryContextProvider;
