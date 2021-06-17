import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {
  const [groceries, setGroceries] = useState([
    { id: uuidv4(), title: 'Tomatoes', ready: false },
    { id: uuidv4(), title: 'Cucumbers', ready: false },
    { id: uuidv4(), title: 'Garlic', ready: false },
    { id: uuidv4(), title: 'Onions', ready: false },
    { id: uuidv4(), title: 'Lemons', ready: false },
  ]);

  const unDoneGroceries = () => {
    return groceries.filter((g) => !g.ready);
  };

  const addGrocery = (title) => {
    const id = uuidv4();
    setGroceries([...groceries, { id, title, ready: false }]);
  };

  const removeGrocery = (id) => {
    setGroceries(groceries.filter((g) => g.id !== id));
  };

  const toggleReady = (id) => {
    const modifiedGroceries = groceries.map((g) => {
      if (g.id === id) {
        g.ready = !g.ready;
      }
      return g;
    });
    setGroceries(modifiedGroceries);
  };

  return (
    <GroceryContext.Provider
      value={{
        groceries,
        addGrocery,
        removeGrocery,
        toggleReady,
        unDoneGroceries,
      }}
    >
      {props.children}
    </GroceryContext.Provider>
  );
};

export default GroceryContextProvider;
