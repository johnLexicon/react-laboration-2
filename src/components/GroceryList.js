import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';

const GroceryList = () => {
  const { state } = useContext(GroceryContext);
  return (
    <div className="my-4">
      {state.groceries && (
        <ul className="grocery-list list-group list-group-flush">
          {state.groceries.map((g) => (
            <GroceryDetails key={g.id} grocery={g}></GroceryDetails>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
