import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const GroceryList = () => {
  const { groceries } = useContext(GroceryContext);
  return (
    <div>
      {groceries && (
        <ul>
          {groceries.map((g) => (
            <li key={g.id}>{g.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
