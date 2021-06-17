import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryDetails from './GroceryDetails';

const GroceryList = () => {
  const { groceries } = useContext(GroceryContext);
  return (
    <div className="my-4">
      {groceries && (
        <ul className="grocery-list list-group list-group-flush">
          {groceries.map((g) => (
            <GroceryDetails key={g.id} grocery={g}></GroceryDetails>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
