import { useContext, useEffect, useState } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';
import { IGrocery } from '../interfaces/groceryInterfaces';

const GroceryList: React.FC = () => {
  const { state } = useContext(GroceryContext);
  const [sortedByCompletion, setSortedByCompletion] = useState<
    IGrocery[] | null
  >(null);
  useEffect(() => {
    if (!state.groceries) return;
    //sort method sorts the actual array and returns the reference to the sorted array (use slice to make a copy to no actually change the actual state.)
    const sortedGroceries: IGrocery[] = state.groceries.slice().sort((a, b) => {
      return a.ready === b.ready ? 0 : a.ready ? 1 : -1;
    });
    setSortedByCompletion(sortedGroceries);
  }, [state.groceries]);
  return (
    <div className="my-4">
      {sortedByCompletion && (
        <ul className="grocery-list list-group list-group-flush">
          {sortedByCompletion.map((g: IGrocery) => (
            <GroceryDetails key={g.id} grocery={g}></GroceryDetails>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
