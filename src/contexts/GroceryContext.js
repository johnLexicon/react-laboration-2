import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {
  const [groceries, setGroceries] = useState([
    { id: uuidv4(), title: 'Tomatoes' },
    { id: uuidv4(), title: 'Cucumbers' },
    { id: uuidv4(), title: 'Garlic' },
    { id: uuidv4(), title: 'Onions' },
    { id: uuidv4(), title: 'Lemons' },
  ]);

  const addGrocery = (grocery) => {
    grocery.id = uuidv4();
    setGroceries([...groceries, grocery]);
  };

  const removeGrocery = (id) => {
    setGroceries(groceries.filter((g) => g.id !== id));
  };

  return (
    <GroceryContext.Provider value={{ groceries, addGrocery, removeGrocery }}>
      {props.children}
    </GroceryContext.Provider>
  );
};

export default GroceryContextProvider;
