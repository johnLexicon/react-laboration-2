import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const Header = () => {
  const { groceries } = useContext(GroceryContext);
  return (
    <div id="header" className="bg-success text-white my-5 text-center">
      <p className="display-1">Grocery List</p>
      <p className="display-5">{groceries.length} groceries left</p>
    </div>
  );
};

export default Header;
