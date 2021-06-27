import { useContext, useEffect, useState } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';

const GroceryList = () => {
  const { state } = useContext(GroceryContext);
  const [sortedByCompletion, setSortedByCompletion] = useState(null);
  useEffect(() => {
    if(!state.groceries)
      return;
    const sortedGroceries = state.groceries.sort((a, b) => {
      return a.ready === b.ready ? 0 : a.ready ? 1 : -1;
    });
    setSortedByCompletion(sortedGroceries);
  }, [state.groceries])
  return (
    <div className="my-4">
      {sortedByCompletion && (
        <ul className="grocery-list list-group list-group-flush">
          {sortedByCompletion.map((g) => (
            <GroceryDetails key={g.id} grocery={g}></GroceryDetails>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
